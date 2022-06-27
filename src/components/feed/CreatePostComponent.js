import { useState, useContext } from 'react';
import { Button, Form, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import Header from '../Header'
import { API } from '../../config/api'
import { UserContext } from '../../context/userContext'

export default function CreatePostComponen() {
    const navigate = useNavigate()

    const [preview, setPreview] = useState(null); //For image preview
    const [message, setMessage] = useState(null);
    const [state, dispatch] = useContext(UserContext)
    const [form, setForm] = useState({
        feed: '',
        caption: '',
    })

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
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            // Create Configuration Content-type here ...
            // Content-type: multipart/form-data
            const config = {
                header: {
                    Authorization: "Bearer " + state.user.token,
                    'Content-type': 'multipart/form-data'
                },
            }

            // Create store data with FormData as object here ...
            const formData = new FormData()

            if (form.feed) {
                formData.set('feed', form.feed[0], form.feed[0].name)
            }

            formData.set('caption', form.caption)

            //insert data here
            const response = await API.post('/feed', formData, config);

            // const checkUser = async () => {
            //     try {
            //         const config = {
            //             header: {
            //                 Authorization: "Bearer " + localStorage.token,
            //             },
            //         }
            //         const response = await API.get('/check-auth', config);

            //         // If the token incorrect
            //         if (response.status === 'failed') {
            //             return dispatch({
            //                 type: 'AUTH_ERROR',
            //             });
            //         }

            //         // Get user data
            //         let payload = response.data.data.user;

            //         // Get token from local storage
            //         payload.token = localStorage.token;

            //         // Send data to useContext
            //         dispatch({
            //             type: 'USER_SUCCESS',
            //             payload,
            //         });
            //     } catch (error) {
            //         console.log(error);
            //     }
            // };

            // Notification
            if (response.data.status == 'success') {
                // checkUser();
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
                <h2>Create Post</h2>
            </div>

            <div className="p-4">

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='uploadImage'>
                        <Form.Label className='btn btn-rainbow text-white'>Upload Photo</Form.Label>
                        <Form.Control type='file' name='feed' hidden onChange={handleChange} />
                        {preview && (
                            <div>
                                <img
                                    src={preview}
                                    style={{
                                        maxWidth: '150px',
                                        maxHeight: '150px',
                                        objectFit: 'cover',
                                    }}
                                    alt="preview"
                                />
                            </div>
                        )}
                    </Form.Group>
                    <Form.Group controlId='caption'>
                        <Form.Control
                            className="my-3 bg-dark text-white"
                            as="textarea"
                            rows={6}
                            placeholder='Caption'
                            name='caption'
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {message && message}
                    <div className='d-flex justify-content-end mt-5'>
                        <Button type='submit' variant='secondary btn-rainbow px-5'>Upload</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}