function addContent() {
    const contentDiv = document.getElementById('content'); // truyền vô đây thẻ để gọi
    contentDiv.innerHTML = `
            <div class="justify-content-center">
                <h1>Tiêu đề của tôi</h1>
                <p>Đây là đoạn văn bản của tôi.</p>
            </div>
        `;
}

// Gọi hàm để thêm nội dung khi trang tải xong
window.onload = addContent;
export default addContent;