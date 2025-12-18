const translations = {
    es: {
        heroTitle: "Conocimiento digital sin barreras",
        heroSubtitle: "Guías prácticas y estrategias para aprender acerca de los temas más preocupantes para la humanidad.",
        heroCta: "Ver Catálogo",
        catalogTitle: "Nuestros Ebooks",
        filterAll: "Todos",
        buyBtn: "Comprar Ahora"
    },
    en: {
        heroTitle: "Digital Knowledge Without Borders",
        heroSubtitle: "Practical guides and strategies for learning about the issues that matter most to humanity.",        
        catalogTitle: "Our Ebooks",
        filterAll: "All",
        buyBtn: "Buy Now"
    }
};

const langBtns = document.querySelectorAll('.lang-switch button');
const filterBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');

const elementsToTranslate = {
    heroTitle: document.getElementById('hero-title'),
    heroSubtitle: document.getElementById('hero-subtitle'),
    heroCta: document.getElementById('hero-cta'),
    catalogTitle: document.getElementById('catalog-title'),
    filterAll: document.getElementById('filter-all')
};

function setLanguage(lang) {
    const t = translations[lang];
    
    elementsToTranslate.heroTitle.textContent = t.heroTitle;
    elementsToTranslate.heroSubtitle.textContent = t.heroSubtitle;
    elementsToTranslate.heroCta.textContent = t.heroCta;
    elementsToTranslate.catalogTitle.textContent = t.catalogTitle;
    elementsToTranslate.filterAll.textContent = t.filterAll;

    document.querySelectorAll('.buy-button').forEach(btn => {
        if(btn.parentElement.parentElement.dataset.lang === lang) {
            btn.textContent = t.buyBtn;
        }
    });

    langBtns.forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    filterProducts(lang);
}

function filterProducts(filter) {
    products.forEach(product => {
        const productLang = product.dataset.lang;
        
        if (filter === 'all') {
            product.style.display = 'flex';
        } else if (filter === productLang) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });

    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.filter === filter) btn.classList.add('active');
    });
}

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.id.split('-')[1];
        setLanguage(lang);
    });
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        if(filter === 'all' || filter === 'es' || filter === 'en') {
            filterProducts(filter);
        }
    });
});