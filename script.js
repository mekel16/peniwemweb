// Toggle Menu untuk tampilan Mobile
function toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("responsive");
}

// Navbar Scroll Effect
window.addEventListener("scroll", function() {
    var nav = document.querySelector(".nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Tutup menu setelah item diklik (khusus Mobile)
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function() {
        var navMenu = document.getElementById("navMenu");
        if (navMenu.classList.contains("responsive")) {
            navMenu.classList.remove("responsive");
        }
    });
});

// Fungsi untuk membuka video dalam mode fullscreen
function openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
    }
}

// Tambahkan event listener ke setiap video agar fullscreen saat diklik
document.querySelectorAll(".video-item iframe").forEach(video => {
    video.addEventListener("click", function() {
        openFullscreen(this);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("page10Modal");
    var img = document.querySelector(".archive-image-page10");
    var modalImg = document.getElementById("page10Img");
    var captionText = document.getElementById("page10Caption");
    var closeBtn = document.querySelector(".close-page10");

    if (img && modal && modalImg && captionText && closeBtn) {
        img.onclick = function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };

        closeBtn.onclick = function () {
            modal.style.display = "none";
        };

        modal.onclick = function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        };
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var page10Element = document.querySelector(".page10");

    if (page10Element) {
        page10Element.style.display = "none"; // Pastikan elemen tersembunyi saat halaman dimuat
    }

    // Tombol atau aksi lain untuk memunculkan elemen setelah interaksi
    var triggerButton = document.getElementById("showPage10"); // Pastikan tombol ada di HTML

    if (triggerButton) {
        triggerButton.addEventListener("click", function() {
            setTimeout(function() {
                if (page10Element) {
                    page10Element.style.display = "grid"; // Muncul setelah 2 detik setelah klik
                }
            }, 2000);
        });
    }
});


// interaksi diiii gambarrrr

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var closeBtn = document.querySelector(".close-modal");

    // Sembunyikan modal saat pertama kali halaman dimuat
    modal.style.display = "none";

    // Tambahkan event listener ke semua gambar yang bisa diklik
    document.querySelectorAll(".archive-image, .archive_akhir-image").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex"; // Hanya muncul saat diklik
            modalImg.src = this.src;
        });
    });

    // Tutup modal jika tombol close diklik
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // Tutup modal jika klik di luar gambar
    modal.onclick = function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };
});


// navigasiii menuuu

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Mencegah perilaku default
            
            var targetId = this.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                smoothScroll(targetSection.offsetTop - 50, 800); // Sesuaikan durasi di ms
            }
        });
    });

    function smoothScroll(targetPosition, duration) {
        var startPosition = window.scrollY;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var progress = Math.min(timeElapsed / duration, 1);

            // Gunakan fungsi easing untuk efek lebih smooth
            var easedProgress = easeInOutQuad(progress);

            window.scrollTo(0, startPosition + distance * easedProgress);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        }

        requestAnimationFrame(animation);
    }
});

