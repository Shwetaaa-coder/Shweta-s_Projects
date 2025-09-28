
import React, { useEffect, useState } from 'react';
const Dashboard = ({ user }) => {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [borrowers, setBorrowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    // Fetch dashboard data from API
    Promise.all([
      fetch('/api/books?limit=6').then((res) => res.json()),
      fetch('/api/members?limit=6').then((res) => res.json()),
      fetch('/api/borrowers?limit=6').then((res) => res.json()),
    ])
      .then(([booksData, membersData, borrowersData]) => {
        setBooks(booksData);
        setMembers(membersData);
        setBorrowers(borrowersData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  if (!user) {
    return (
      <div style={styles.container}>
        <h2>Access Denied</h2>
        <p>Please log in to access your dashboard.</p>
      </div>
    );
  }

  if (loading) {
    return <div style={styles.container}>Loading dashboard...</div>;
  }

  // Calculate total borrowed books count
  const totalBorrowedBooks = borrowers.filter((b) => !b.returnDate).length;

  return (
    <div style={styles.container}>
      <h1>Welcome back, {user.email}!</h1>

      {/* Summary Cards */}
      <div style={styles.summaryCards}>
        <div style={styles.card}>
          <h3>Total Books</h3>
          <p>{books.length}</p>
        </div>
        <div style={styles.card}>
          <h3>Total Members</h3>
          <p>{members.length}</p>
        </div>
        <div style={styles.card}>
          <h3>Books Borrowed</h3>
          <p>{totalBorrowedBooks}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={styles.quickActions}>
        <button style={styles.button} onClick={() => window.location.href = '/books/add'}>
          Add Book
        </button>
        <button style={styles.button} onClick={() => window.location.href = '/members/add'}>
          Add Member
        </button>
        <button style={styles.button} onClick={() => window.location.href = '/borrowers/add'}>
          Add Borrower
        </button>
      </div>

      {/* Recent Books Gallery */}
      <section style={{ marginTop: 40 }}>
        <h2>Recent Books</h2>
        {books.length === 0 ? (
          <p>No books available.</p>
        ) : (
          <div style={styles.gallery}>
            {books.map((book) => (
              <div key={book._id} style={styles.bookCard}>
                <img
                  src={book.coverUrl || 'https://via.placeholder.com/120x180?text=No+Cover'}
                  alt={book.title}
                  style={styles.bookCover}
                />
                <h4 style={{ margin: '10px 0 5px' }}>{book.title}</h4>
                <p style={{ margin: 0, fontSize: 14, color: '#555' }}>{book.author}</p>
                <p style={{ fontSize: 12, color: book.available ? 'green' : 'red' }}>
                  {book.available ? 'Available' : 'Checked Out'}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Borrowers Table */}
      <section style={{ marginTop: 40 }}>
        <h2>Recent Borrowers</h2>
        {borrowers.length === 0 ? (
          <p>No borrowing records found.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Member Name</th>
                <th>Book Title</th>
                <th>Borrow Date</th>
                <th>Return Date</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {borrowers.map((b) => (
                <tr key={b._id}>
                  <td>{b.memberName}</td>
                  <td>{b.bookTitle}</td>
                  <td>{new Date(b.borrowDate).toLocaleDateString()}</td>
                  <td>{b.returnDate ? new Date(b.returnDate).toLocaleDateString() : 'Not Returned'}</td>
                  <td>{b.note || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: 1200,
    margin: 'auto',
  },
  summaryCards: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: 20,
  },
  card: {
    flex: 1,
    background: '#f0f4f8',
    borderRadius: 8,
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgb(0 0 0 / 0.1)',
  },
  quickActions: {
    marginTop: 30,
    display: 'flex',
    gap: 15,
  },
  button: {
    flex: 1,
    padding: '10px 20px',
    fontSize: 16,
    cursor: 'pointer',
    borderRadius: 5,
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    transition: 'background-color 0.3s ease',
  },
  gallery: {
    marginTop: 20,
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap',
  },
  bookCard: {
    width: 140,
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  bookCover: {
    width: '100%',
    height: 180,
    objectFit: 'cover',
    borderRadius: 4,
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: 15,
  },
  'table th, table td': {
    border: '1px solid #ddd',
    padding: 8,
    textAlign: 'left',
  },
};

export default Dashboard;
