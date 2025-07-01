import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const News = () => {
    // Mảng dữ liệu tin tức thể thao
    const newLists = [
        {
            id: 1,
            title: 'Messi Leads Argentina to Copa America Victory',
            description: 'Lionel Messi scores a stunning goal to secure Argentina’s title in a thrilling Copa America final.',
            images: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=640&q=80'
        },
        {
            id: 2,
            title: 'LeBron James Announces Olympic Comeback',
            description: 'The NBA legend is set to represent Team USA at the 2025 Paris Olympics, aiming for another gold medal.',
            images: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=640&q=80'
        },
        {
            id: 3,
            title: 'Serena Williams Retires with Emotional Farewell',
            description: 'The tennis icon bids goodbye to the court after a legendary career, leaving fans in tears.',
            images: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=640&q=80'
        },
        {
            id: 4,
            title: 'Formula 1: Verstappen Dominates Monaco Grand Prix',
            description: 'Max Verstappen clinches the top spot in a rain-soaked Monaco race, showcasing his driving prowess.',
            images: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=640&q=80'
        },
        {
            id: 5,
            title: 'Ronaldo Breaks Scoring Record in Euro Qualifiers',
            description: 'Cristiano Ronaldo nets a hat-trick, setting a new all-time scoring record in European qualifiers.',
            images: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=640&q=80'
        },
        {
            id: 6,
            title: 'WNBA Star Caitlin Clark Shines in Rookie Season',
            description: 'Caitlin Clark dazzles with record-breaking performances, boosting women’s basketball popularity.',
            images: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=640&q=80'
        },
        {
            id: 7,
            title: 'India Wins T20 World Cup in Thrilling Finish',
            description: 'India clinches the T20 World Cup title with a last-ball victory, sparking nationwide celebrations.',
            images: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=640&q=80'
        },
        {
            id: 8,
            title: 'Simone Biles Returns with Gold at World Championships',
            description: 'The gymnastics legend makes a stunning comeback, winning gold and inspiring a new generation.',
            images: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=640&q=80'
        },
    ];
    
    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <Container className="news-container py-4">
            <motion.h1
                style={{ color: 'red' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Sports News
            </motion.h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {newLists.map((news, index) => (
                    <Col key={news.id}>
                        <motion.div
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                        >
                            <Card className="h-100 news-card shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={news.images}
                                    alt={news.title}
                                    className="news-image"
                                />
                                <Card.Body>
                                    <Card.Title className="news-title">{news.title}</Card.Title>
                                    <Card.Text className="news-description">
                                        {news.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );

};

export default News;