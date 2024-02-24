document.addEventListener('DOMContentLoaded', function () {
    const main = document.getElementById('main');
    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('placeholder', 'User');

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', 'Password');

    const entrarButton = document.createElement('button');
    entrarButton.textContent = 'Entrar';

    const createAccountButton = document.createElement('button');
    createAccountButton.textContent = 'Create Account';

    const socialButtons = document.createElement('div');
    socialButtons.classList.add('social-buttons');

    const googleButton = createSocialButton('Google', './icons/google-mas.png', 'social-icon');
    const facebookButton = createSocialButton('Facebook', './icons/facebook.png', 'social-icon');
    const instagramButton = createSocialButton('Instagram', './icons/instagram.png', 'social-icon');

    socialButtons.appendChild(googleButton);
    socialButtons.appendChild(facebookButton);
    socialButtons.appendChild(instagramButton);

    main.appendChild(usernameInput);
    main.appendChild(passwordInput);
    main.appendChild(entrarButton);
    main.appendChild(createAccountButton);
    main.appendChild(socialButtons);

    // Animación del placeholder
    usernameInput.addEventListener('focus', function () {
        usernameInput.setAttribute('placeholder', '');
    });

    usernameInput.addEventListener('blur', function () {
        if (usernameInput.value === '') {
            usernameInput.setAttribute('placeholder', 'User');
        }
    });

    passwordInput.addEventListener('focus', function () {
        passwordInput.setAttribute('placeholder', '');
    });

    passwordInput.addEventListener('blur', function () {
        if (passwordInput.value === '') {
            passwordInput.setAttribute('placeholder', 'Password');
        }
    });

    entrarButton.addEventListener('click', function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Verificar credenciales
        if (username === "Robert" && password === "123456") {
            // Redireccionar a /menu
            window.location.href = "/menu";
        } else {
            alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        }
    });

    function createSocialButton(text, image, className) {
        const button = document.createElement('button');
        const img = document.createElement('img');
        img.src = image;
        img.alt = text;
        img.classList.add(className); // Agregar la clase CSS a la imagen
        button.appendChild(img);
        return button;
    }
});

