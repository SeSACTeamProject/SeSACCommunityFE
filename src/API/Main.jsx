import axios from "axios";
import { Cookies } from "react-cookie";

// Authorization 토큰값 있을 시 header에 기본값으로 반영함
const cookie = new Cookies();
const token = cookie.get("Authorization");
axios.defaults.headers.Authorization = `Bearer ${token}`;

