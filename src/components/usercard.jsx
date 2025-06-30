function UserCard({ user, onShowDetails }) {
    return (
      <div className="user-card">
        <img src={user.profileImage} alt={user.name} />
        <h2>{user.name}</h2>
        <p>@{user.username}</p>
        <p>{user.email}</p> 
        
        {/* عرض حالة المستخدم */}
        <p style={{ color: user.isActive ? 'green' : 'red' }}>
          {user.isActive ? 'Activo' : 'Inactivo'}
        </p>
  
        <button onClick={onShowDetails}>عرض التفاصيل</button>
      </div>
    );
  }
  
  export default UserCard;
  
  
