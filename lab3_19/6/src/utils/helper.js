// src/utils/helpers.js
export const calculateScore = (correctAnswers, totalQuestions) => {
    return Math.round((correctAnswers / totalQuestions) * 100);
};

export const getResultMessage = (percentage) => {
    if (percentage >= 80) return 'Xuất sắc! 🎉';
    if (percentage >= 60) return 'Khá tốt! 👍';
    return 'Cần cố gắng thêm! 💪';
};

export const getResultVariant = (percentage) => {
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    return 'danger';
};
