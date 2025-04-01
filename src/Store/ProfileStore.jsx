import { create } from "zustand";

const useProfileStore = create((set) => ({
    // 더미데이터
    myPosts: [
        { id: 1, type: "스터디", title: "스터디모집", status: "모집중" },
        { id: 2, type: "팀플", title: "팀원모집", status: "모집완료" },
    ],
    scraps: [
        { id: 1, title: "스터디모집", author: "aaa", createDate: "2025-03-31", comments: 5, likes: 10 },
        { id: 2, title: "프로젝트모집", author: "bbb", createDate: "2025-04-01", comments: 2, likes: 7 }
    ],
    reservations: [
        { id: 1, reason: "팀 미팅", requestDate: "2025-04-01", status: "대기중" },
        { id: 2, reason: "스터디", requestDate: "2025-04-02", status: "승인" },
        { id: 3, reason: "스터디", requestDate: "2025-03-31", status: "취소" },
    ],
}))

export default useProfileStore;