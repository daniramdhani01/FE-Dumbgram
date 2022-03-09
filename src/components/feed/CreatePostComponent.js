import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Header from '../Header'
import { API } from '../../config/api'

function CreatePostComponen() {
    const navigate = useNavigate()

    const [preview, setPreview] = useState(null); //For image preview

    const [form, setForm] = useState({
        image: '',
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
                    'Content-type': 'multipart/form-data'
                },
            }

            // Create store data with FormData as object here ...
            const formData = new FormData()

            formData.set('image', form.image[0], form.image[0].name)
            formData.set('caption', form.caption)

            //insert data here
            const response = await API.post('/feed', formData, config);

            console.log(response);

            navigate('/feed')
        } catch (err) {
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
                        <Form.Control type='file' name='image' hidden onChange={handleChange} />
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
                    <div className='d-flex justify-content-end mt-5'>
                        <Button type='submit' variant='secondary btn-rainbow px-5'>Upload</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default CreatePostComponen