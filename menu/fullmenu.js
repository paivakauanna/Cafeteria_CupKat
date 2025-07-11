
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Close mobile menu when clicking a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const cartButton = document.getElementById('cart-button');
            const shoppingCart = document.getElementById('shopping-cart');
            const closeCart = document.getElementById('close-cart');
            
            cartButton.addEventListener('click', function() {
                shoppingCart.classList.toggle('translate-x-full');
                document.body.classList.toggle('overflow-hidden');
            });
            
            closeCart.addEventListener('click', function() {
                shoppingCart.classList.add('translate-x-full');
                document.body.classList.remove('overflow-hidden');
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const backToTopButton = document.getElementById('back-to-top');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.remove('opacity-0', 'invisible');
                    backToTopButton.classList.add('opacity-100', 'visible');
                } else {
                    backToTopButton.classList.remove('opacity-100', 'visible');
                    backToTopButton.classList.add('opacity-0', 'invisible');
                }
            });
            
            backToTopButton.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
 
        document.addEventListener('DOMContentLoaded', function() {
            const filterDropdowns = document.querySelectorAll('.filter-dropdown');
            
            filterDropdowns.forEach(dropdown => {
                const button = dropdown.querySelector('button');
                
                button.addEventListener('click', function() {
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns
                    filterDropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                });
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', function(event) {
                filterDropdowns.forEach(dropdown => {
                    const isClickInside = dropdown.contains(event.target);
                    
                    if (!isClickInside && dropdown.classList.contains('active')) {
                        dropdown.classList.remove('active');
                    }
                });
            });
            
            // Price range slider
            const priceRange = document.getElementById('price-range');
            const priceValue = document.getElementById('price-value');
            
            if (priceRange && priceValue) {
                priceRange.addEventListener('input', function() {
                    priceValue.textContent = '$' + this.value;
                });
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.category-filter-btn');
            const menuItems = document.querySelectorAll('.menu-item');
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    
                    // Toggle active class on buttons
                    categoryButtons.forEach(btn => btn.classList.remove('active', 'bg-[#FFD1DC]', 'text-white'));
                    categoryButtons.forEach(btn => btn.classList.add('bg-white', 'text-[#4A3636]'));
                    this.classList.add('active', 'bg-[#FFD1DC]', 'text-white');
                    this.classList.remove('bg-white', 'text-[#4A3636]');
                    
                    // Filter menu items
                    menuItems.forEach(item => {
                        if (category === 'all' || item.getAttribute('data-category').includes(category)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                    
                    // Scroll to appropriate section if category is not 'all'
                    if (category !== 'all') {
                        const section = document.getElementById(category + '-section');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const searchInput = document.getElementById('search-input');
            const menuItems = document.querySelectorAll('.menu-item');
            
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                menuItems.forEach(item => {
                    const title = item.querySelector('h3').textContent.toLowerCase();
                    const description = item.querySelector('p').textContent.toLowerCase();
                    
                    if (title.includes(searchTerm) || description.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                // Reset category filter buttons
                const categoryButtons = document.querySelectorAll('.category-filter-btn');
                categoryButtons.forEach(btn => btn.classList.remove('active', 'bg-[#FFD1DC]', 'text-white'));
                categoryButtons.forEach(btn => btn.classList.add('bg-white', 'text-[#4A3636]'));
                document.querySelector('.category-filter-btn[data-category="all"]').classList.add('active', 'bg-[#FFD1DC]', 'text-white');
                document.querySelector('.category-filter-btn[data-category="all"]').classList.remove('bg-white', 'text-[#4A3636]');
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const quickViewButtons = document.querySelectorAll('.quick-view-btn');
            const quickViewModal = document.getElementById('quick-view-modal');
            const closeModal = document.getElementById('close-modal');
            
            quickViewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    quickViewModal.classList.add('active');
                    document.body.classList.add('overflow-hidden');
                });
            });
            
            closeModal.addEventListener('click', function() {
                quickViewModal.classList.remove('active');
                document.body.classList.remove('overflow-hidden');
            });
            
            // Close modal when clicking outside content
            quickViewModal.addEventListener('click', function(event) {
                if (event.target === quickViewModal) {
                    quickViewModal.classList.remove('active');
                    document.body.classList.remove('overflow-hidden');
                }
            });
        });