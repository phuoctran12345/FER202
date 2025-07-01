import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Alert, Card, Spinner } from 'react-bootstrap';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:3000/posts/${id}`);
                if (!response.ok) {
                    throw new Error(`Lỗi HTTP! Status: ${response.status}`);
                }
                const contentType = response.headers.get('Content-Type');
                if (!contentType || !contentType.includes('application/json')) {
                    const text = await response.text();
                    console.error('Phản hồi không phải JSON:', text);
                    throw new Error('Phản hồi từ server không phải JSON');
                }
                const data = await response.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="text-center mt mc-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return (
            <Alert variant="danger" className="mt-4">
                {error}
                <div className="mt-2">
                    <Link to="/posts" className="btn btn-primary">Quay lại danh sách</Link>
                </div>
            </Alert>
        );
    }

    return (
        <div className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title className="display-6">{post?.title}</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">
                        Tác giả: {post?.author}
                    </Card.Subtitle>
                    <Card.Text>{post?.content}</Card.Text>
                    <Link to="/posts" className="btn btn-primary">Quay lại danh sách</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PostDetail;