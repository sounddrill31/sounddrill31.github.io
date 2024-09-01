async function fetchMarkdownContent(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error("Error fetching markdown content:", error);
        return `# Error\nFailed to load content for ${file}. Please check the console for more information.`;
    }
}

async function renderMarkdown(markdown) {
    try {
        const response = await fetch('https://api.github.com/markdown', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: markdown, mode: 'gfm' }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error("Error rendering markdown:", error);
        return `<p>Error rendering markdown. Please check the console for more information.</p>`;
    }
}

function setupDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (!darkModeToggle) {
        console.error("Dark mode toggle button not found");
        return;
    }
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');

    function setDarkMode(isDark) {
        body.classList.toggle('dark-mode', isDark);
        icon.classList.toggle('fa-moon', !isDark);
        icon.classList.toggle('fa-sun', isDark);
        localStorage.setItem('darkMode', isDark);
    }

    darkModeToggle.addEventListener('click', () => {
        const isDark = !body.classList.contains('dark-mode');
        setDarkMode(isDark);
    });

    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
        setDarkMode(storedDarkMode === 'true');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        setDarkMode(e.matches);
    });
}

async function loadContent(file) {
    const content = document.getElementById('content');
    if (!content) {
        console.error("Content element not found");
        return;
    }
    const markdown = await fetchMarkdownContent(file);
    const rendered = await renderMarkdown(markdown);
    content.innerHTML = rendered;

    generateSocialIcons(markdown);
    setupSmoothScrolling();
}

function generateSocialIcons(markdown) {
    const socialIconRegex = /\[SOCIAL_ICON\](\w+):(\S+)/g;
    let match;
    let icons = '';
    const socialIconsContainer = document.getElementById('social-icons');

    while ((match = socialIconRegex.exec(markdown)) !== null) {
        const [, platform, url] = match;
        icons += `<a href="${url}" target="_blank" rel="noopener noreferrer"><i class="fab fa-${platform.toLowerCase()}"></i></a>`;
    }

    socialIconsContainer.innerHTML = icons;
}

async function generateMenu() {
    const nav = document.getElementById('main-nav');
    if (!nav) {
        console.error("Main navigation element not found");
        return;
    }
    const markdown = await fetchMarkdownContent('./content/index.md');
    const menuItemRegex = /^## (.+)/gm;
    let match;

    while ((match = menuItemRegex.exec(markdown)) !== null) {
        const [, menuItem] = match;
        const link = document.createElement('a');
        link.textContent = menuItem;
        link.href = `#${menuItem.toLowerCase().replace(/\s+/g, '-')}`;
        nav.appendChild(link);
    }
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

async function init() {
    try {
        setupDarkMode();
        await generateMenu();
        await loadContent('./content/index.md');
    } catch (error) {
        console.error("Initialization error:", error);
    }
}

init();