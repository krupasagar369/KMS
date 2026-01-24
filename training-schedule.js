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
  { id: 1, course: 'Power BI', category: 'microsoft', batches: [
    { day: 7, time: '6 PM' }, { day: 12, time: '7 AM' }, { day: 18, time: '8 AM' }, { day: 25, time: '7 PM' }
  ]},
  { id: 2, course: 'Advanced Excel', category: 'microsoft', batches: [
    { day: 5, time: '7 AM' }, { day: 14, time: '6 PM' }, { day: 21, time: '8 AM' }, { day: 28, time: '7 PM' }
  ]},
  { id: 3, course: 'Data Analytics', category: 'data', batches: [
    { day: 6, time: '8 AM' }, { day: 16, time: '6 PM' }, { day: 22, time: '9 AM' }, { day: 29, time: '7 PM' }
  ]},
  { id: 4, course: 'Data Science', category: 'data', batches: [
    { day: 8, time: '7 AM' }, { day: 17, time: '6 PM' }, { day: 23, time: '8 AM' }, { day: 30, time: '7 PM' }
  ]},
  { id: 5, course: 'Python Programming', category: 'programming', batches: [
    { day: 4, time: '7 AM' }, { day: 11, time: '6 PM' }, { day: 19, time: '8 AM' }, { day: 26, time: '7 PM' }
  ]},
  { id: 6, course: 'Core Java', category: 'programming', batches: [
    { day: 3, time: '8 AM' }, { day: 10, time: '6 PM' }, { day: 20, time: '7 AM' }, { day: 27, time: '7 PM' }
  ]},
  { id: 7, course: 'Advanced Java', category: 'programming', batches: [
    { day: 9, time: '7 AM' }, { day: 15, time: '6 PM' }, { day: 24, time: '8 AM' }, { day: 31, time: '7 PM' }
  ]},
  // { id: 8, course: 'Java Full Stack', category: 'development', batches: [
  //   { day: 6, time: '7 AM' }, { day: 13, time: '6 PM' }, { day: 20, time: '8 AM' }, { day: 27, time: '7 PM' }
  // ]},
  // { id: 9, course: 'Web Development', category: 'development', batches: [
  //   { day: 5, time: '8 AM' }, { day: 14, time: '6 PM' }, { day: 21, time: '7 AM' }, { day: 28, time: '7 PM' }
  // ]},
  // { id: 10, course: 'React JS', category: 'development', batches: [
  //   { day: 4, time: '7 AM' }, { day: 12, time: '6 PM' }, { day: 19, time: '8 AM' }, { day: 26, time: '7 PM' }
  // ]},
  // { id: 11, course: 'Angular', category: 'development', batches: [
  //   { day: 6, time: '7 AM' }, { day: 15, time: '6 PM' }, { day: 22, time: '8 AM' }, { day: 29, time: '7 PM' }
  // ]},
  // { id: 12, course: 'Node JS', category: 'development', batches: [
  //   { day: 7, time: '8 AM' }, { day: 16, time: '6 PM' }, { day: 23, time: '7 AM' }, { day: 30, time: '7 PM' }
  // ]},
  { id: 13, course: 'SQL & MySQL', category: 'database', batches: [
    { day: 3, time: '7 AM' }, { day: 11, time: '6 PM' }, { day: 18, time: '8 AM' }, { day: 25, time: '7 PM' }
  ]},
  { id: 14, course: 'Oracle DB', category: 'database', batches: [
    { day: 6, time: '8 AM' }, { day: 14, time: '6 PM' }, { day: 22, time: '7 AM' }, { day: 29, time: '7 PM' }
  ]},
  { id: 15, course: 'AWS', category: 'cloud', batches: [
    { day: 8, time: '7 AM' }, { day: 17, time: '6 PM' }, { day: 24, time: '8 AM' }, { day: 31, time: '7 PM' }
  ]},
  { id: 16, course: 'DevOps', category: 'cloud', batches: [
    { day: 6, time: '8 AM' }, { day: 14, time: '6 PM' }, { day: 22, time: '7 AM' }, { day: 29, time: '7 PM' }
  ]},
  { id: 17, course: 'Azure', category: 'cloud', batches: [
    { day: 5, time: '7 AM' }, { day: 13, time: '6 PM' }, { day: 21, time: '8 AM' }, { day: 28, time: '7 PM' }
  ]},
  { id: 18, course: 'Machine Learning', category: 'data', batches: [
    { day: 7, time: '8 AM' }, { day: 16, time: '6 PM' }, { day: 23, time: '9 AM' }, { day: 30, time: '7 PM' }
  ]},
  { id: 19, course: 'Artificial Intelligence', category: 'data', batches: [
    { day: 6, time: '7 AM' }, { day: 15, time: '6 PM' }, { day: 22, time: '8 AM' }, { day: 29, time: '7 PM' }
  ]},
  { id: 20, course: 'UI/UX Design', category: 'design', batches: [
    { day: 4, time: '8 AM' }, { day: 12, time: '6 PM' }, { day: 20, time: '7 AM' }, { day: 27, time: '7 PM' }
  ]},
  { id: 21, course: 'Digital Marketing', category: 'marketing', batches: [
    { day: 5, time: '7 AM' }, { day: 14, time: '6 PM' }, { day: 21, time: '8 AM' }, { day: 28, time: '7 PM' }
  ]},
  { id: 22, course: 'SEO', category: 'marketing', batches: [
    { day: 6, time: '8 AM' }, { day: 15, time: '6 PM' }, { day: 22, time: '7 AM' }, { day: 29, time: '7 PM' }
  ]},
  { id: 23, course: 'Software Testing', category: 'testing', batches: [
    { day: 4, time: '7 AM' }, { day: 11, time: '6 PM' }, { day: 19, time: '8 AM' }, { day: 26, time: '7 PM' }
  ]},
  { id: 24, course: 'Manual Testing', category: 'testing', batches: [
    { day: 5, time: '8 AM' }, { day: 13, time: '6 PM' }, { day: 21, time: '7 AM' }, { day: 28, time: '7 PM' }
  ]},
  { id: 25, course: 'Automation Testing', category: 'testing', batches: [
    { day: 6, time: '7 AM' }, { day: 15, time: '6 PM' }, { day: 23, time: '8 AM' }, { day: 30, time: '7 PM' }
  ]},
  { id: 26, course: 'Linux', category: 'operating-system', batches: [
    { day: 3, time: '7 AM' }, { day: 10, time: '6 PM' }, { day: 18, time: '8 AM' }, { day: 25, time: '7 PM' }
  ]}
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


