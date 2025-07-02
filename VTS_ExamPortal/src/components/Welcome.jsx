import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, ProgressBar } from "react-bootstrap";

export default function Welcome({ username }) {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const getGreeting = () => {
    const hour = currentDate.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const exams = [
    { title: "Figma Technical Questions", date: "May 15, 2025", time: "2:30 PM", duration: "30 Minutes" },
    { title: "Figma Practical Questions", date: "May 16, 2025", time: "4:00 PM", duration: "1 Day" },
  ];

  const handleUpcomingExamsClick = () => {
    navigate("/upcoming-exams");
  };

  return (
    <div className="container mt-3" style={{ fontFamily: "Urbanist, sans-serif" }}>
      {/* Header */}
      <div className="mb-3">
        <h5 className="fw-bold">{getGreeting()}, {username}!</h5>
        <p className="text-muted">{formattedDate} | {formattedTime}</p>
      </div>

      <Row className="g-4">
        {/* Left - Upcoming Exams */}
        <Col xs={12} md={4}>
          <div className="p-3" style={{ backgroundColor: "#e6f985", borderRadius: "8px" }}>
            <h6>Upcoming Exams</h6>
            {exams.map((exam, idx) => (
              <div key={idx} className="p-2 bg-white rounded shadow-sm mb-2">
                <strong>{exam.title}</strong>
                <div className="small text-muted">Duration: {exam.duration}</div>
                <div className="small fw-bold">{exam.date} - {exam.time}</div>
              </div>
            ))}
            <button
              className="btn btn-dark btn-sm mt-2"
              onClick={handleUpcomingExamsClick}
            >
              View All Exams
            </button>
          </div>
        </Col>

        {/* Right - Profile, Progress, Calendar */}
        <Col xs={12} md={8}>
          <div className="p-3" style={{ backgroundColor: "#e6f985", borderRadius: "8px" }}>
            {/* Profile */}
            <div className="text-center mb-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt={username}
                className="rounded-circle"
                width="80"
                height="80"
              />
              <h6 className="mt-2">{username}</h6>
              <p className="mb-1">UI/UX Designing</p>
            </div>

            {/* Course Progress */}
            <div className="mb-3">
              <h6>Course Progress</h6>
              <label>Figma</label>
              <ProgressBar now={95} variant="success" className="mb-2" />
              <label>Adobe Photoshop</label>
              <ProgressBar now={20} variant="warning" />
            </div>

            {/* Calendar */}
            <div>
              <h6>Exam Calendar</h6>
              <div className="bg-dark text-white text-center p-2 rounded">
                <p className="mb-0">
                  {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
                </p>
                <div className="d-flex justify-content-around small mt-2">
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                </div>
                <div className="d-flex flex-wrap mt-2 text-center">
                  {Array.from({ length: 31 }, (_, i) => (
                    <div
                      key={i}
                      style={{ width: "14%", padding: "2px", fontSize: "12px" }}
                      className={`${i + 1 === 17 ? "bg-warning text-dark rounded-circle" : ""}`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
