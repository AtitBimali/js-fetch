      // Function to make the HTTP request and populate the table
      function fetchData() {
        fetch('https://dummy.restapiexample.com/api/v1/employees')
          .then(response => response.json())
          .then(responseData => {
            const data = responseData.data; // Access the "data" array within the response

            const tableBody = document.getElementById('tableBody');

            // Clear existing table rows
            tableBody.innerHTML = '';

            // Populate the table with data
            data.forEach(employee => {
              const row = document.createElement('tr');
              row.innerHTML = `
                <td>${employee.id}</td>
                <td>${employee.employee_name}</td>
                <td>${employee.employee_salary}</td>
                <td>${employee.employee_age}</td>
              `;
              tableBody.appendChild(row);
            });
          })
          .catch(error => {
            const errorContainer = document.getElementById('errorContainer');
            errorContainer.style.display = 'block';
            errorContainer.innerHTML = 'Error: ' + "Too many requests at a time, please wait a while.";
          });
      }

      // Event listener for modal open
      document.addEventListener('DOMContentLoaded', function () {
        const openModalBtn = document.getElementById('openModalBtn');
        const dataModal = new bootstrap.Modal(document.getElementById('dataModal'));

        if (openModalBtn) {
          openModalBtn.addEventListener('click', function () {
            fetchData();
            dataModal.show();
          });
        } else {
          console.error('Error: Button with ID "openModalBtn" not found.');
        }
      });