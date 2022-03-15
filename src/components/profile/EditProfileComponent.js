import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Alert } from 'react-bootstrap'

import Header from '../Header'
import { API } from '../../config/api'
import { UserContext } from '../../context/userContext'

export default function EditProfileComponent() {
    const navigate = useNavigate()
    const [state, dispatch] = useContext(UserContext)
    const { id } = state.user

    const [message, setMessage] = useState(null);
    const [preview, setPreview] = useState(null); //For image preview
    const [form, setForm] = useState({
        fullName: '',
        username: '',
        profile: '',
        bio: '',
    });

    const getDataUser = async (id) => {
        try {
            const response = await API.get('/user/' + id);

            if (response.data.data.user.image) {
                setPreview(response.data.data.user.image);
            }
            setForm({
                ...form,
                fullName: response.data.data.user.fullName,
                username: response.data.data.user.username,
                bio: response.data.data.user.bio,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDataUser(id);

        return () => {
            setForm({
                fullName: '',
                username: '',
                profile: '',
                bio: '',
            })
        }
    }, [])

    // console.log(form)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === 'file' ? e.target.files : e.target.value,
        })

        // Create image url for preview
        if (e.target.type === 'file') {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
        // console.log(form)
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            // Create Configuration Content-type here ...
            // Content-type: multipart/form-data
            const config = {
                header: {
                    Authorization: "Bearer " + localStorage.token,
                    'Content-type': 'multipart/form-data'
                },
            }

            // Create store data with FormData as object here ...
            const formData = new FormData()

            if (form.profile) {
                formData.set('profile', form.profile[0], form.profile[0].name)
            }

            formData.set('fullName', form.fullName)
            formData.set('username', form.username)
            formData.set('bio', form.bio)

            //insert data here
            const response = await API.patch('/user/' + id, formData, config);

            // console.log(response.data.data);
            const checkUser = async () => {
                try {
                    const config = {
                        header: {
                            Authorization: "Bearer " + localStorage.token,
                        },
                    }
                    const response = await API.get('/check-auth', config);

                    // If the token incorrect
                    if (response.status === 'failed') {
                        return dispatch({
                            type: 'AUTH_ERROR',
                        });
                    }

                    // Get user data
                    let payload = response.data.data.user;

                    // Get token from local storage
                    payload.token = localStorage.token;

                    // Send data to useContext
                    dispatch({
                        type: 'USER_SUCCESS',
                        payload,
                    });
                } catch (error) {
                    console.log(error);
                }
            };

            // Notification
            if (response.data.status == 'success') {
                checkUser();
                navigate('/feed')
            } else {
                const alert = (
                    <Alert variant="danger" className="py-1 text-center">
                        Failed! {response.data.message}
                    </Alert>
                );
                setMessage(alert);
            }
        } catch (err) {
            const alert = (
                <Alert variant="danger" className="py-1 text-center">
                    Failed!
                </Alert>
            );
            setMessage(alert);
            console.log(err)
        }
    }
    return (
        <>
            <div className="p-4 sticky-top bg-black pb-3">
                <Header />
                <h2>Edit Profile</h2>
            </div>

            <div className="p-4">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='uploadImage'>
                        <Form.Label className='btn btn-rainbow text-white'>Attach Thumbhnail</Form.Label>
                        <Form.Control type='file' name='profile' hidden onChange={handleChange} />
                        {preview ? preview.slice(-5) == '/null' ? '' :
                            preview && (
                                <div>
                                    <img
                                        src={preview}
                                        style={{
                                            maxWidth: '150px',
                                            maxHeight: '150px',
                                            objectFit: 'cover',
                                        }}
                                        className='rounded-circle'
                                    // alt="preview"
                                    />
                                </div>
                            ) : ''}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            className="my-3 bg-dark text-white"
                            as="input"
                            name='fullName'
                            value={form.fullName}
                            onChange={handleChange}
                            placeholder='Name' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            className="my-3 bg-dark text-white"
                            as="input"
                            name='username'
                            value={form.username}
                            onChange={handleChange}
                            placeholder='Username' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            className="my-3 bg-dark text-white"
                            as="textarea"
                            rows={6}
                            name='bio'
                            value={form.bio === null ? '' : form.bio}
                            onChange={handleChange}
                            placeholder='Bio' />
                    </Form.Group>
                    {message && message}
                    <div className='d-flex justify-content-end mt-5'>
                        <Button type='submit' variant='secondary btn-rainbow px-5'>Save</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}