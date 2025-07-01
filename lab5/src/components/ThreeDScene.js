// src/components/ThreeDScene.js
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import gsap from 'gsap';

const ThreeDScene = () => {
    const boxRef = useRef();

    useEffect(() => {
        // Animation với GSAP
        gsap.to(boxRef.current.rotation, {
            y: Math.PI * 2, // Xoay 360 độ quanh trục Y
            duration: 3,    // Thời gian 3 giây
            repeat: -1,     // Lặp vô hạn
            ease: 'linear', // Hiệu ứng tuyến tính
        });
    }, []);

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Box ref={boxRef} args={[2, 2, 2]}> {/* Khối lập phương 3D */}
                <meshStandardMaterial color="orange" />
            </Box>
            <OrbitControls />
        </Canvas>
    );
};

export default ThreeDScene;