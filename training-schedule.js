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
       BATCH DATA
    ======================= */
   const batchesData = [
    // === MICROSOFT COURSES ===
    {
        id: 1,
        course: 'Power BI',
        category: 'microsoft',
        batches: [
            { date: '07-01-26', time: '6 PM' },
            { date: '07-01-26', time: '7 AM' },
            { date: '16-01-26', time: '8 AM' },
            { date: '23-01-26', time: '7 PM' }
        ]
    },
    {
        id: 2,
        course: 'Data Analytics',
        category: 'data',
        batches: [
            { date: '07-01-26', time: '8 AM' },
            { date: '17-01-26', time: '6 PM' },
            { date: '21-01-26', time: '9 AM' },
            { date: '28-01-26', time: '7 PM' }
        ]
    },
    {
        id: 3,
        course: 'Microsoft Fabric',
        category: 'microsoft',
        batches: [
            { date: '06-01-26', time: '7 AM' },
            { date: '16-01-26', time: '6 PM' },
            { date: '23-01-26', time: '8 AM' },
            { date: '30-01-26', time: '5 PM' }
        ]
    },
    {
        id: 4,
        course: 'MSBI',
        category: 'microsoft',
        batches: [
            { date: '09-01-26', time: '9 AM' },
            { date: '17-01-26', time: '5 PM' },
            { date: '24-01-26', time: '7 AM' },
            { date: '31-01-26', time: '6 PM' }
        ]
    },
    {
        id: 5,
        course: 'SQL Server',
        category: 'data',
        batches: [
            { date: '07-01-26', time: '7 AM' },
            { date: '17-01-26', time: '9 AM' },
            { date: '21-01-26', time: '6 PM' },
            { date: '28-01-26', time: '11 AM' }
        ]
    },
    {
        id: 6,
        course: 'Informatica',
        category: 'data',
        batches: [
            { date: '09-01-26', time: '9 AM' },
            { date: '19-01-26', time: '6 PM' },
            { date: '29-01-26', time: '8 AM' },
            { date: '03-02-26', time: '7 PM' }
        ]
    },
    {
        id: 7,
        course: 'ADV Excel',
        category: 'microsoft',
        batches: [
            { date: '08-01-26', time: '8 AM' },
            { date: '22-01-26', time: '9 AM' },
            { date: '30-01-26', time: '6 PM' },
            { date: '09-02-26', time: '7 PM' }
        ]
    },

    // === PROGRAMMING COURSES ===
    {
        id: 8,
        course: 'MS Office',
        category: 'microsoft',
        batches: [
            { date: '10-01-26', time: '10 AM' },
            { date: '18-01-26', time: '2 PM' },
            { date: '25-01-26', time: '11 AM' },
            { date: '01-02-26', time: '3 PM' }
        ]
    },
    {
        id: 9,
        course: 'Typing',
        category: 'fundamentals',
        batches: [
            { date: '11-01-26', time: '9 AM' },
            { date: '20-01-26', time: '5 PM' },
            { date: '27-01-26', time: '10 AM' },
            { date: '04-02-26', time: '4 PM' }
        ]
    },
    {
        id: 10,
        course: 'C Programming',
        category: 'programming',
        batches: [
            { date: '12-01-26', time: '7 AM' },
            { date: '22-01-26', time: '6 PM' },
            { date: '29-01-26', time: '8 AM' },
            { date: '05-02-26', time: '7 PM' }
        ]
    },
    {
        id: 11,
        course: 'C++ Programming',
        category: 'programming',
        batches: [
            { date: '13-01-26', time: '8 AM' },
            { date: '23-01-26', time: '7 PM' },
            { date: '30-01-26', time: '9 AM' },
            { date: '06-02-26', time: '6 PM' }
        ]
    },
    {
        id: 12,
        course: 'Data Structures',
        category: 'programming',
        batches: [
            { date: '14-01-26', time: '9 AM' },
            { date: '24-01-26', time: '6 PM' },
            { date: '31-01-26', time: '7 AM' },
            { date: '07-02-26', time: '5 PM' }
        ]
    },

    // === DEVELOPMENT COURSES ===
    {
        id: 13,
        course: 'SAS Programming',
        category: 'data',
        batches: [
            { date: '15-01-26', time: '10 AM' },
            { date: '25-01-26', time: '8 AM' },
            { date: '01-02-26', time: '6 PM' },
            { date: '08-02-26', time: '9 AM' }
        ]
    },
    {
        id: 14,
        course: 'Java Development',
        category: 'development',
        batches: [
            { date: '16-01-26', time: '7 AM' },
            { date: '26-01-26', time: '5 PM' },
            { date: '02-02-26', time: '8 AM' },
            { date: '09-02-26', time: '7 PM' }
        ]
    },
    {
        id: 15,
        course: '.NET Development',
        category: 'development',
        batches: [
            { date: '17-01-26', time: '9 AM' },
            { date: '27-01-26', time: '6 PM' },
            { date: '03-02-26', time: '10 AM' },
            { date: '10-02-26', time: '5 PM' }
        ]
    },

    // === AZURE CLOUD COURSES ===
    {
        id: 16,
        course: 'ADE / Azure BI',
        category: 'azure',
        batches: [
            { date: '18-01-26', time: '8 AM' },
            { date: '28-01-26', time: '7 PM' },
            { date: '04-02-26', time: '9 AM' },
            { date: '11-02-26', time: '6 PM' }
        ]
    },
    {
        id: 17,
        course: 'ADF: Azure Data Factory',
        category: 'azure',
        batches: [
            { date: '19-01-26', time: '7 AM' },
            { date: '29-01-26', time: '6 PM' },
            { date: '05-02-26', time: '8 AM' },
            { date: '12-02-26', time: '7 PM' }
        ]
    },
    {
        id: 18,
        course: 'ADB: Azure Databricks',
        category: 'azure',
        batches: [
            { date: '20-01-26', time: '9 AM' },
            { date: '30-01-26', time: '5 PM' },
            { date: '06-02-26', time: '7 AM' },
            { date: '13-02-26', time: '6 PM' }
        ]
    },

    // === POWER PLATFORM COURSES ===
    {
        id: 19,
        course: 'Power Apps',
        category: 'microsoft',
        batches: [
            { date: '21-01-26', time: '10 AM' },
            { date: '31-01-26', time: '8 AM' },
            { date: '07-02-26', time: '6 PM' },
            { date: '14-02-26', time: '9 AM' }
        ]
    },
    {
        id: 20,
        course: 'Power Automate',
        category: 'microsoft',
        batches: [
            { date: '22-01-26', time: '7 AM' },
            { date: '01-02-26', time: '5 PM' },
            { date: '08-02-26', time: '9 AM' },
            { date: '15-02-26', time: '6 PM' }
        ]
    },

    // === AI & DATA SCIENCE ===
    {
        id: 21,
        course: 'Artificial Intelligence',
        category: 'ai',
        batches: [
            { date: '23-01-26', time: '8 AM' },
            { date: '02-02-26', time: '7 PM' },
            { date: '09-02-26', time: '6 AM' },
            { date: '16-02-26', time: '5 PM' }
        ]
    },
    {
        id: 22,
        course: 'Generative AI',
        category: 'ai',
        batches: [
            { date: '24-01-26', time: '9 AM' },
            { date: '03-02-26', time: '6 PM' },
            { date: '10-02-26', time: '8 AM' },
            { date: '17-02-26', time: '7 PM' }
        ]
    },
    {
        id: 23,
        course: 'Data Engineering',
        category: 'data',
        batches: [
            { date: '25-01-26', time: '7 AM' },
            { date: '04-02-26', time: '9 AM' },
            { date: '11-02-26', time: '6 PM' },
            { date: '18-02-26', time: '8 AM' }
        ]
    },
    {
        id: 24,
        course: 'Data Science',
        category: 'data',
        batches: [
            { date: '26-01-26', time: '10 AM' },
            { date: '05-02-26', time: '7 PM' },
            { date: '12-02-26', time: '9 AM' },
            { date: '19-02-26', time: '6 PM' }
        ]
    },

    // === SOFT SKILLS ===
    {
        id: 25,
        course: 'English Communication Skills',
        category: 'softskills',
        batches: [
            { date: '27-01-26', time: '6 PM' },
            { date: '06-02-26', time: '8 AM' },
            { date: '13-02-26', time: '5 PM' },
            { date: '20-02-26', time: '7 PM' }
        ]
    },

    // === ADDITIONAL COURSES ===
    {
        id: 26,
        course: 'Python',
        category: 'programming',
        batches: [
            { date: '28-01-26', time: '9 AM' },
            { date: '07-02-26', time: '6 PM' },
            { date: '14-02-26', time: '8 AM' },
            { date: '21-02-26', time: '7 PM' }
        ]
    },
    {
        id: 27,
        course: 'Excel',
        category: 'microsoft',
        batches: [
            { date: '29-01-26', time: '10 AM' },
            { date: '08-02-26', time: '7 AM' },
            { date: '15-02-26', time: '6 PM' },
            { date: '22-02-26', time: '9 AM' }
        ]
    }
];


    /* =======================
       CATEGORY HEADER COLOR
    ======================= */
    function getCategoryClass(category) {
        const categoryMap = {
            data: 'card-header-data',
            cloud: 'card-header-cloud',
            microsoft: 'card-header-microsoft',
            programming: 'card-header-programming',
            'soft-skills': 'card-header-soft-skills'
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

            const fullTime =
                batch.time.includes('AM')
                    ? `Morning (${batch.time})`
                    : `Evening (${batch.time})`;

            const message =
                `Hi,\n\nI am interested in joining the ${course.course} course ` +
                `on ${batch.date} at ${batch.time}.\n\n` +
                `Please contact me with more details.\n\nThank you.`;

            return `
                <div class="batch-slot">
                    <div class="slot-info">
                        <div class="slot-date">${batch.date}</div>
                        <div class="slot-time">${batch.time}</div>
                    </div>

<a href="contact.html?course=${encodeURIComponent(course.course)}&time=${encodeURIComponent(fullTime)}"
   class="join-btn">
    Join
</a>

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

    /* =======================
       EVENT LISTENERS
    ======================= */
    categoryFilter.addEventListener('change', filterBatches);
    timeFilter.addEventListener('change', filterBatches);
    searchInput.addEventListener('input', filterBatches);

    /* =======================
       INITIAL LOAD
    ======================= */
    renderBatches(batchesData);

});
