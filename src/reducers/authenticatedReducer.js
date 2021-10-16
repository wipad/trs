//Reducer for character information Initialize State
const initState = {
    studentId: "", //รหัสนักศึกษา
    idCardCode: "", //รหัสบัตร ปปช
    user: {
        studentId: "", //รหัสนักศึกษา
        idCardCode: "", //รหัสบัตร ปปช
        fistName: "", //ชื้อ
        lastName: "", //นามสกุล
        nickName: "", //ชื่อเล่น
        berdDays: "", //วันเกิด
        bloodType: "A", //กรุ๊ปเลือด
        sex: 0, //เพศ
        nationality: "", //สัญชาติ
        ethnicity: "", //เชื้อชาติ
        age: 16, //อายุ
        email: "", //email
        phone: "", //เบอร์โทรศัพท์,
        contactNumber: "", //เบอร์ติดต่อ
        group: "", //คณะ
        fieldOfStudy: "", //สาขาวิชา
        grade: "", //ชั้นปีที่
        jobPositionTraining: "", //ตำแหน่งงานที่ฝึก
        internshipPlace: "", //สถานที่ฝึกงาน
        address: "", //ที่อยู่
    },
    status: false //สถานะผู้ใช้งาน
}

//Define Actions
const authenticatedReducer = (state = initState, action) => {
    switch (action.type) {
        //Change character name
        case 'CHANGE_STUDENTID':
            return {
                ...state,
                studentId: action.payload
            }

        case 'CHANGE_IDCARDCODE':
            return {
                ...state,
                idCardCode: action.payload
            }
        case 'CHANGE_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'CHANGE_STATUS':
            return {
                ...state,
                status: action.payload
            }
        default:
            return state
    }
}

// export function fetchAuthReducer(studentId, idCardCode) {
//     if (studentId && idCardCode) {
//         return dispatch => {
//             var data = {
//                 "studentId": studentId,
//                 "idCardCode":idCardCode
//             };
//             var myHeaders = new Headers();
//             myHeaders.append("Content-Type", "application/json");
    
//             var raw = JSON.stringify(data);
//             // var raw = data;
//             var requestOptions = {
//                 method: "POST",
//                 headers: myHeaders,
//                 body: raw,
//                 redirect: "follow"
//             };
    
    
//             dispatch({ type: "FETCH_SIGN_IN_REQUEST", payload: data });
    
//             return fetch(``, requestOptions)
//                 .then(response => response.json())
//                 .then(result => {
//                     console.log(result);
//                     // const toJson = JSON.parse(result)
    
//                     // console.log(toJson);
//                     dispatch({ type: "AUTHENTICATED", payload: true })
//                     dispatch({ type: "AUTHENTICATED_DATA", payload: result })
    
//                     // eslint-disable-next-line require-yield
//                     db.open().then(_db => {
//                         _db.auths.toArray().then(_d => {
//                             if (_d.length === 0) {
//                                 _db.auths.add(result);
//                             } else {
//                                 _db.auths.update(_d[0].id, result)
    
//                             }
//                         })
//                     }).catch(e => {
//                         console.error(e);
//                     })
    
    
    
    
    
//                     return result
//                 })
//                 .catch(error => {
//                     console.log(error);
    
//                     return error
//                 });
    
//         }
//     } else {
//         if (studentId) {
//             return dispatch => {
//                 var data = {
//                     "uid": uid
//                 };
//                 var myHeaders = new Headers();
//                 myHeaders.append("Content-Type", "application/json");
        
//                 var raw = JSON.stringify(data);
//                 // var raw = data;
//                 var requestOptions = {
//                     method: "POST",
//                     headers: myHeaders,
//                     body: raw,
//                     redirect: "follow"
//                 };
        
        
//                 dispatch({ type: "FETCH_SIGN_IN_REQUEST", payload: data });
        
//                 return fetch(``, requestOptions)
//                     .then(response => response.json())
//                     .then(result => {
//                         console.log(result);
//                         // const toJson = JSON.parse(result)
        
//                         // console.log(toJson);
//                         dispatch({ type: "AUTHENTICATED", payload: true })
//                         dispatch({ type: "AUTHENTICATED_DATA", payload: result })
        
//                         // eslint-disable-next-line require-yield
//                         db.open().then(_db => {
//                             _db.auths.toArray().then(_d => {
//                                 if (_d.length === 0) {
//                                     _db.auths.add(result);
//                                 } else {
//                                     _db.auths.update(_d[0].id, result)
        
//                                 }
//                             })
//                         }).catch(e => {
//                             console.error(e);
//                         })
        
        
        
        
        
//                         return result
//                     })
//                     .catch(error => {
//                         console.log(error);
        
//                         return error
//                     });
        
//             }
//         } else {
//             return {status:false,message: "ไม่มี รหัสนักศึกษา"}
//         }
//     }
  
// }

export default authenticatedReducer;