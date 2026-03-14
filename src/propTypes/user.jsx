import PropTypes from 'prop-types';

const User = ({fullname, age, job, isadult, diplomes, salary}) => {
    return (
        <>
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{fullname}</h4>
                <p className="card-text">Age: {age}</p>
                <h4 className="card-title">Job</h4>
                <p className="card-text">{job}</p>
                <h4 className="card-title">Diplomes</h4>
                <ul>
                    {diplomes?.map((diplome, index) => <li key={index}>{diplome}</li>)}
                </ul>
                <h4 className="card-title">Salary</h4>
                <p className="card-text">{salary}$</p>
            </div>
        </div>
        </>
    )
}

User.propTypes = {
    fullname: PropTypes.string.isRequired,
    age: PropTypes.number,
    job: PropTypes.string,
    isadult: PropTypes.bool,
    diplomes: PropTypes.array,
    salary: PropTypes.number
}

export default User;