import { CiLocationOn } from "react-icons/ci";

const HotJobsCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-3">
      <div className="flex gap-2">
        <figure>
          <img className="w-12" src={company_logo} alt="" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="text-gray-500 flex items-center gap-1">
            {" "}
            <CiLocationOn /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill, id) => (
            <p
              className="border rounded-md p-2 text-center hover:text-purple-600 hover:bg-gray-400 "
              key={id}
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end">
          <div className="flex items-center gap-1">
            <p>
              Salary: 💸 {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency}
            </p>
            <button className="btn btn-primary">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
