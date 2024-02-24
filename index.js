document.addEventListener('DOMContentLoaded', function () {
    const main = document.getElementById('main');

    const container = document.createElement('div');
    container.classList.add('container');

    const userField = document.createElement('input');
    userField.setAttribute('type', 'text');
    userField.setAttribute('placeholder', 'User');

    const passwordField = document.createElement('input');
    passwordField.setAttribute('type', 'password');
    passwordField.setAttribute('placeholder', 'Password');

    const entrarButton = document.createElement('button');
    entrarButton.textContent = 'Entrar';

    const createAccountButton = document.createElement('button');
    createAccountButton.textContent = 'Create Account';

    const socialButtons = document.createElement('div');
    socialButtons.classList.add('social-buttons');

    const googleButton = createSocialButton('Google', 'google.png');
    const facebookButton = createSocialButton('Facebook', 'facebook.png');
    const instagramButton = createSocialButton('Instagram', 'instagram.png');

    socialButtons.appendChild(googleButton);
    socialButtons.appendChild(facebookButton);
    socialButtons.appendChild(instagramButton);

    container.appendChild(userField);
    container.appendChild(passwordField);
    container.appendChild(entrarButton);

    container.appendChild(createAccountButton);
    container.appendChild(socialButtons);

    main.appendChild(container);

    // Animación del placeholder
    userField.addEventListener('focus', function () {
        userField.setAttribute('placeholder', '');
    });

    userField.addEventListener('blur', function () {
        if (userField.value === '') {
            userField.setAttribute('placeholder', 'User');
        }
    });

    passwordField.addEventListener('focus', function () {
        passwordField.setAttribute('placeholder', '');
    });

    passwordField.addEventListener('blur', function () {
        if (passwordField.value === '') {
            passwordField.setAttribute('placeholder', 'Password');
        }
    });

    function createSocialButton(text, image) {
        const button = document.createElement('button');
        const img = document.createElement('img');
        img.src = image;
        img.alt = text;
        button.appendChild(img);
        return button;
    }
});
