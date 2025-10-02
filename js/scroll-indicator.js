// Scroll Progress Indicator
class ScrollIndicator {
    constructor(sections) {
        this.sections = sections;
        this.dots = null;
        this.progressFill = null;
        this.init();
    }

    init() {
        // Create the indicator HTML
        const indicatorHTML = `
            <div class="scroll-indicator">
                <div class="progress-track">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
                ${this.sections.map(section => `
                    <div class="scroll-dot" data-target="${section.id}">
                        <span class="scroll-label">${section.label}</span>
                    </div>
                `).join('')}
            </div>
        `;

        // Append to body
        document.body.insertAdjacentHTML('beforeend', indicatorHTML);

        // Get references
        this.dots = document.querySelectorAll('.scroll-dot');
        this.progressFill = document.getElementById('progressFill');

        // Bind events
        this.bindEvents();

        // Initial update
        this.updateScrollIndicator();
    }

    updateScrollIndicator() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        // Update progress bar
        if (this.progressFill) {
            this.progressFill.style.height = scrollPercent + '%';
        }

        // Update active dot
        let activeIndex = 0;
        this.sections.forEach((section, index) => {
            const element = section.id === 'top' ? document.body : document.getElementById(section.id);
            if (element && scrollTop >= element.offsetTop - 200) {
                activeIndex = index;
            }
        });

        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }

    bindEvents() {
        // Click handler for dots
        this.dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const targetId = dot.getAttribute('data-target');
                const section = this.sections.find(s => s.id === targetId);

                if (section) {
                    const element = section.id === 'top' ? document.body : document.getElementById(section.id);
                    if (element) {
                        const offset = section.id === 'top' ? 0 : element.offsetTop - 80;
                        window.scrollTo({
                            top: offset,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Listen to scroll events
        window.addEventListener('scroll', () => this.updateScrollIndicator());
        window.addEventListener('resize', () => this.updateScrollIndicator());
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollIndicator;
}
