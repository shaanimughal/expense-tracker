function deleteExpense(id) {
    if (confirm('Are you sure you want to delete this expense?')) {
      fetch(`/${id}`, {
        method: 'DELETE'
      }).then(response => {
        if (response.ok) {
          window.location.reload();
        }
      }).catch(err => {
        console.error('Error:', err);
      });
    }
  }