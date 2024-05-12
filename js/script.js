function copyToClipboard(val) {
    var el = document.createElement('textarea');
    el.value = val;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("복사되었습니다: " + val);
}

// 모달 창 닫기
function closeModal() {
    modal.style.display = "none";
}

// 이전/다음 이미지 표시
function plusSlides(n) {
    currentIndex += n;
    if (currentIndex >= images.length) {
    currentIndex = 0;
    } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
    }
    modalImage.src = images[currentIndex];
}

// 모달 창 외부 클릭 시 닫기
window.onclick = function(event) {
    if (event.target == modal) {
    closeModal();
    }
};


