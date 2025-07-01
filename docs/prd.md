# Todo List 관리 앱 PRD (Product Requirements Document)

## 1. 제품 개요

### 1.1 제품명
**VibeCoding Todo App**

### 1.2 목적
바이브 코딩 학습을 위한 라이브 데모 프로젝트로, 백엔드와 프론트엔드를 갖춘 풀스택 Todo 관리 앱

### 1.3 개발 방식
MVP (Minimum Viable Product) 방식으로 핵심 기능부터 빠르게 구현

## 2. 대상 사용자

### 2.1 주요 사용자
- 개인 할 일 관리가 필요한 사용자
- 웹 브라우저를 통해 접근하는 사용자

### 2.2 사용 시나리오
- 일상적인 할 일 목록 작성 및 관리
- 개인 계정으로 데이터 보호 및 관리
- 간단한 로그인으로 빠른 접근

## 3. 핵심 기능 요구사항

### 3.1 사용자 인증
- **회원가입**: 이메일과 비밀번호로 간단한 계정 생성
- **로그인/로그아웃**: JWT 토큰 기반 인증
- **제약사항**: 이메일 인증 불필요 (데모 목적)

### 3.2 Todo 관리 기능
- **생성**: 새로운 Todo 항목 추가
- **조회**: 사용자별 Todo 목록 표시
- **수정**: 기존 Todo 내용 편집
- **삭제**: 불필요한 Todo 항목 제거
- **상태 변경**: 완료/미완료 상태 토글

### 3.3 사용자 인터페이스
- **반응형 디자인**: 다양한 화면 크기 지원
- **직관적 UI**: 쉽고 빠른 Todo 관리
- **실시간 업데이트**: 변경사항 즉시 반영

## 4. 기술 스택

### 4.1 백엔드
- **언어**: Go
- **웹 프레임워크**: Gin 또는 Gorilla Mux
- **데이터베이스**: SQLite
- **ORM**: GORM 또는 순수 SQL
- **인증**: JWT 토큰

### 4.2 프론트엔드
- **프레임워크**: React 18
- **빌드 도구**: Vite
- **스타일링**: Tailwind CSS
- **상태 관리**: React Query (TanStack Query)
- **라우팅**: React Router
- **HTTP 클라이언트**: Axios

### 4.3 인프라
- **컨테이너화**: Docker & Docker Compose
- **배포 환경**: 로컬 컨테이너
- **데이터 저장**: SQLite 파일 기반

## 5. API 설계

### 5.1 인증 API
```
POST /api/auth/register  - 회원가입
POST /api/auth/login     - 로그인
POST /api/auth/logout    - 로그아웃
```

### 5.2 Todo API
```
GET    /api/todos        - Todo 목록 조회
POST   /api/todos        - Todo 생성
PUT    /api/todos/:id    - Todo 수정
DELETE /api/todos/:id    - Todo 삭제
PATCH  /api/todos/:id    - Todo 상태 변경
```

## 6. 데이터베이스 스키마

### 6.1 Users 테이블
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 6.2 Todos 테이블
```sql
CREATE TABLE todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## 7. 비기능적 요구사항

### 7.1 성능
- **응답 시간**: API 응답 시간 < 500ms
- **동시 사용자**: 최대 100명 (데모 목적)

### 7.2 보안
- **비밀번호**: bcrypt 해싱
- **JWT 토큰**: 안전한 토큰 관리
- **CORS**: 적절한 CORS 정책 설정

### 7.3 사용성
- **직관적 UI**: 사용법 설명 없이도 이용 가능
- **반응형**: 모바일/태블릿/데스크톱 지원

## 8. 제약사항

### 8.1 기술적 제약
- SQLite 사용으로 단일 서버 운영
- 이메일 인증 기능 제외
- 복잡한 권한 관리 제외

### 8.2 비즈니스 제약
- 데모/학습 목적으로 상용 서비스 수준의 기능 제외
- MVP 방식으로 핵심 기능에 집중

## 9. 개발 우선순위

### Phase 1: 백엔드 기반 구축
1. Go 프로젝트 설정 및 기본 구조
2. SQLite 데이터베이스 설정
3. 사용자 인증 API 구현
4. Todo CRUD API 구현

### Phase 2: 프론트엔드 구현
1. React + Vite 프로젝트 설정
2. Tailwind CSS 설정 및 기본 레이아웃
3. 로그인/회원가입 페이지
4. Todo 목록 및 관리 페이지

### Phase 3: 통합 및 배포
1. 백엔드-프론트엔드 연동
2. Docker 컨테이너화
3. Docker Compose 설정
4. 로컬 환경 테스트

## 10. 성공 지표

### 10.1 기능적 성공 지표
- [ ] 사용자 회원가입/로그인 정상 동작
- [ ] Todo CRUD 기능 완전 구현
- [ ] 프론트엔드-백엔드 API 연동 완료
- [ ] 반응형 UI 구현

### 10.2 기술적 성공 지표
- [ ] Docker 컨테이너 정상 실행
- [ ] API 응답 시간 < 500ms
- [ ] 에러 없는 빌드 및 배포

## 11. 향후 확장 가능성

### 11.1 기능 확장
- Todo 카테고리/태그 시스템
- 우선순위 및 마감일 설정
- 팀 협업 기능
- 파일 첨부 기능

### 11.2 기술적 확장
- PostgreSQL/MySQL 데이터베이스 전환
- Redis 캐싱 시스템
- 실시간 알림 (WebSocket)
- 모바일 앱 개발

## 12. 일정 및 마일스톤

### 개발 일정 (추정)
- **Week 1**: 백엔드 API 개발
- **Week 2**: 프론트엔드 UI 개발
- **Week 3**: 통합 테스트 및 배포 설정
- **Week 4**: 버그 수정 및 최적화

### 주요 마일스톤
1. **M1**: 백엔드 API 완성
2. **M2**: 프론트엔드 기본 기능 완성
3. **M3**: 전체 시스템 통합 완료
4. **M4**: 라이브 데모 준비 완료