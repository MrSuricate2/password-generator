// Variables globales
const passwordDisplay = document.getElementById('passwordDisplay');
const passwordText = document.getElementById('passwordText');
const copyBtn = document.getElementById('copyBtn');
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const generateBtn = document.getElementById('generateBtn');
const strengthBar = document.getElementById('strengthBar');
const strengthScore = document.getElementById('strengthScore');
const warning = document.getElementById('warning');

// Checkboxes
const lowercaseCheck = document.getElementById('lowercase');
const uppercaseCheck = document.getElementById('uppercase');
const numbersCheck = document.getElementById('numbers');
const symbolsToggleCheck = document.getElementById('symbolsToggle');

// Checkboxes pour les symboles
const basicSymbolsCheck = document.getElementById('basicSymbols');
const mathSymbolsCheck = document.getElementById('mathSymbols');
const bracketsCheck = document.getElementById('brackets');
const punctuationCheck = document.getElementById('punctuation');
const specialCheck = document.getElementById('special');
const quotesCheck = document.getElementById('quotes');
const symbolsSection = document.getElementById('symbolsSection');

// Sets de caractères
const charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    basicSymbols: '!@#$%',
    mathSymbols: '^&*+-=',
    brackets: '()[]{}<>',
    punctuation: '.,;:',
    special: '|\\/_~`',
    quotes: '"\'`'
};

let currentPassword = '';

// Fonction pour générer un mot de passe
function generatePassword() {
    const length = parseInt(lengthSlider.value);
    let charset = '';
    let requiredChars = [];

    // Construire le jeu de caractères selon les options sélectionnées
    if (lowercaseCheck.checked) {
        charset += charSets.lowercase;
        requiredChars.push(getRandomChar(charSets.lowercase));
    }
    if (uppercaseCheck.checked) {
        charset += charSets.uppercase;
        requiredChars.push(getRandomChar(charSets.uppercase));
    }
    if (numbersCheck.checked) {
        charset += charSets.numbers;
        requiredChars.push(getRandomChar(charSets.numbers));
    }

    // Gérer les symboles si la case principale est cochée
    if (symbolsToggleCheck.checked) {
        let symbolsCharset = '';
        
        if (basicSymbolsCheck.checked) {
            symbolsCharset += charSets.basicSymbols;
        }
        if (mathSymbolsCheck.checked) {
            symbolsCharset += charSets.mathSymbols;
        }
        if (bracketsCheck.checked) {
            symbolsCharset += charSets.brackets;
        }
        if (punctuationCheck.checked) {
            symbolsCharset += charSets.punctuation;
        }
        if (specialCheck.checked) {
            symbolsCharset += charSets.special;
        }
        if (quotesCheck.checked) {
            symbolsCharset += charSets.quotes;
        }

        if (symbolsCharset) {
            charset += symbolsCharset;
            requiredChars.push(getRandomChar(symbolsCharset));
        }
    }

    // Vérifier qu'au moins une option est sélectionnée
    if (charset === '') {
        warning.style.display = 'block';
        return '';
    } else {
        warning.style.display = 'none';
    }

    if (charset === '') {
        alert('Tous les caractères ont été exclus. Veuillez ajuster vos paramètres.');
        return currentPassword;
    }

    let password = '';

    // Ajouter au moins un caractère de chaque type sélectionné
    for (let char of requiredChars) {
        if (charset.includes(char) && password.length < length) {
            password += char;
        }
    }

    // Compléter le mot de passe avec des caractères aléatoires
    for (let i = password.length; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    // Mélanger le mot de passe pour éviter les patterns
    password = shuffleString(password);

    return password;
}

// Fonction utilitaire pour échapper les caractères spéciaux dans les regex
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Fonction pour obtenir un caractère aléatoire d'un jeu
function getRandomChar(charset) {
    return charset.charAt(Math.floor(Math.random() * charset.length));
}

// Fonction pour mélanger une chaîne
function shuffleString(str) {
    return str.split('').sort(() => Math.random() - 0.5).join('');
}

// Fonction pour calculer la force du mot de passe
function calculateStrength(password) {
    if (!password) return { score: 0, text: '-', color: '#e0e0e0' };

    let score = 0;
    let feedback = [];

    // Longueur
    if (password.length >= 12) score += 25;
    else if (password.length >= 8) score += 15;
    else score += 5;

    // Types de caractères
    if (/[a-z]/.test(password)) score += 15;
    if (/[A-Z]/.test(password)) score += 15;
    if (/[0-9]/.test(password)) score += 15;
    if (/[^a-zA-Z0-9]/.test(password)) score += 20;

    // Bonus pour la diversité
    const uniqueChars = new Set(password).size;
    if (uniqueChars >= password.length * 0.7) score += 10;

    // Déterminer le niveau et la couleur
    let level, color;
    if (score >= 80) {
        level = 'Très Fort';
        color = '#28a745';
    } else if (score >= 60) {
        level = 'Fort';
        color = '#20c997';
    } else if (score >= 40) {
        level = 'Moyen';
        color = '#ffc107';
    } else if (score >= 20) {
        level = 'Faible';
        color = '#fd7e14';
    } else {
        level = 'Très Faible';
        color = '#dc3545';
    }

    return { score: Math.min(100, score), text: level, color };
}

// Fonction pour mettre à jour l'affichage du mot de passe
function updatePasswordDisplay() {
    const password = generatePassword();
    if (password) {
        currentPassword = password;
        passwordText.textContent = password;
        copyBtn.style.display = 'block';
        
        // Mettre à jour la jauge de force
        const strength = calculateStrength(password);
        strengthBar.style.width = strength.score + '%';
        strengthBar.style.backgroundColor = strength.color;
        strengthScore.textContent = strength.text;
        strengthScore.style.backgroundColor = strength.color;
    }
}

// Fonction pour copier le mot de passe
function copyPassword() {
    if (currentPassword) {
        navigator.clipboard.writeText(currentPassword).then(() => {
            copyBtn.textContent = '✅ Copié !';
            copyBtn.classList.add('copied');
            setTimeout(() => {
                copyBtn.textContent = '📋 Copier';
                copyBtn.classList.remove('copied');
            }, 2000);
        }).catch(() => {
            // Fallback pour les navigateurs plus anciens
            const textArea = document.createElement('textarea');
            textArea.value = currentPassword;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            copyBtn.textContent = '✅ Copié !';
            copyBtn.classList.add('copied');
            setTimeout(() => {
                copyBtn.textContent = '📋 Copier';
                copyBtn.classList.remove('copied');
            }, 2000);
        });
    }
}

// Event listeners
lengthSlider.addEventListener('input', (e) => {
    lengthValue.textContent = e.target.value;
    if (currentPassword) {
        updatePasswordDisplay();
    }
});

generateBtn.addEventListener('click', updatePasswordDisplay);
copyBtn.addEventListener('click', copyPassword);

// Event listeners pour les checkboxes et l'input d'exclusion
[lowercaseCheck, uppercaseCheck, numbersCheck, symbolsToggleCheck, 
 basicSymbolsCheck, mathSymbolsCheck, bracketsCheck, punctuationCheck, 
 specialCheck, quotesCheck].forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Gérer l'affichage de la section symboles
        if (checkbox === symbolsToggleCheck) {
            symbolsSection.style.display = symbolsToggleCheck.checked ? 'block' : 'none';
        }
        
        if (currentPassword) {
            updatePasswordDisplay();
        }
    });
});

// Générer un mot de passe initial
updatePasswordDisplay();