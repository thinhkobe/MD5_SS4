import React, { useState } from "react";

export default function StudentList() {
  const [studentList, setStudentList] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );
  const viewData = (id) => {
    const student = studentList.fiter((s) => {
      s.id === id;
    })[0];
  };

  return (
    <>
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{student.studentId}</td>
                    <td>{student.studentName}</td>
                    <td>{student.studentAge}</td>
                    <td>{student.studentSex}</td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text"
                          onClick={viewData(student.studentId)}
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
