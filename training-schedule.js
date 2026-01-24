document.addEventListener('DOMContentLoaded', function () {

    /* =======================
       DOM ELEMENTS
    ======================= */
    const batchesGrid = document.getElementById('batchesGrid');
    const noResults = document.getElementById('noResults');
    const categoryFilter = document.getElementById('categoryFilter');
    const timeFilter = document.getElementById('timeFilter');
    const searchInput = document.getElementById('searchInput');
    const countNumber = document.getElementById('countNumber');

    /* =======================
       AUTO DATE FUNCTION
    ======================= */
    function getAutoDate(day) {
        const today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth();

        if (day < today.getDate()) {
            month++;
            if (month > 11) {
                month = 0;
                year++;
            }
        }

        const date = new Date(year, month, day);
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yy = String(date.getFullYear()).slice(-2);

        return `${dd}-${mm}-${yy}`;
    }

    /* =======================
       BATCH DATA (AUTO)
    ======================= */
    const batchesData = [
        {
            id: 1,
            course: 'Power BI',
            category: 'microsoft',
            batches: [
                { day: 7, time: '6 PM' },
                { day: 7, time: '7 AM' },
                { day: 16, time: '8 AM' },
                { day: 23, time: '7 PM' }
            ]
        },
        {
            id: 2,
            course: 'Data Analytics',
            category: 'data',
            batches: [
                { day: 7, time: '8 AM' },
                { day: 17, time: '6 PM' },
                { day: 21, time: '9 AM' },
                { day: 28, time: '7 PM' }
            ]
        },
        {
            id: 10,
            course: 'C Programming',
            category: 'programming',
            batches: [
                { day: 12, time: '7 AM' },
                { day: 22, time: '6 PM' },
                { day: 29, time: '8 AM' },
                { day: 5, time: '7 PM' }
            ]
        },
        {
            id: 14,
            course: 'Java Development',
            category: 'development',
            batches: [
                { day: 16, time: '7 AM' },
                { day: 26, time: '5 PM' },
                { day: 2, time: '8 AM' },
                { day: 9, time: '7 PM' }
            ]
        }
        // 👉 Continue same pattern for remaining courses
    ];

    /* =======================
       CATEGORY HEADER COLOR
    ======================= */
    function getCategoryClass(category) {
        const categoryMap = {
            data: 'card-header-data',
            microsoft: 'card-header-microsoft',
            programming: 'card-header-programming',
            development: 'card-header-development'
        };
        return categoryMap[category] || 'card-header-data';
    }

    /* =======================
       RENDER BATCHES
    ======================= */
    function renderBatches(filteredBatches) {

        batchesGrid.innerHTML = '';
        countNumber.textContent = filteredBatches.length;

        if (filteredBatches.length === 0) {
            noResults.classList.remove('d-none');
            return;
        }

        noResults.classList.add('d-none');

        filteredBatches.forEach(course => {

            const col = document.createElement('div');
            col.className = 'col-lg-4 col-md-6';

            const slotsHTML = course.batches.map(batch => {

                const autoDate = getAutoDate(batch.day);

                const fullTime =
                    batch.time.includes('AM')
                        ? `Morning (${batch.time})`
                        : `Evening (${batch.time})`;

                return `
                    <div class="batch-slot">
                        <div class="slot-info">
                            <div class="slot-date">${autoDate}</div>
                            <div class="slot-time">${batch.time}</div>
                        </div>
                        <a href="contact.html?course=${encodeURIComponent(course.course)}&time=${encodeURIComponent(fullTime)}"
                           class="join-btn">Join</a>
                    </div>
                `;
            }).join('');

            col.innerHTML = `
                <div class="course-schedule-card">
                    <div class="card-header-custom ${getCategoryClass(course.category)}">
                        <h3>${course.course}</h3>
                    </div>
                    <div class="batch-slots">
                        ${slotsHTML}
                    </div>
                </div>
            `;

            batchesGrid.appendChild(col);
        });
    }

    /* =======================
       FILTER LOGIC
    ======================= */
    function filterBatches() {
        const category = categoryFilter.value;
        const time = timeFilter.value;
        const search = searchInput.value.toLowerCase();

        const filtered = batchesData.filter(course => {

            const matchCategory = category === 'all' || course.category === category;

            const matchTime =
                time === 'all' ||
                course.batches.some(batch =>
                    time === 'morning' ? batch.time.includes('AM') :
                    time === 'evening' ? batch.time.includes('PM') : true
                );

            const matchSearch =
                search === '' || course.course.toLowerCase().includes(search);

            return matchCategory && matchTime && matchSearch;
        });

        renderBatches(filtered);
    }

    categoryFilter.addEventListener('change', filterBatches);
    timeFilter.addEventListener('change', filterBatches);
    searchInput.addEventListener('input', filterBatches);

    renderBatches(batchesData);
});
