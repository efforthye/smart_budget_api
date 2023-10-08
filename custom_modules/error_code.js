/**
 * Created by efforthye on 2023-10-08.
 *
 * 공통으로 사용하는 에러코드 정의
 * 0000 ~ 0999 : http 에러
 * 1000 ~ 1999 : 인증 에러
 * 2000 ~ 2999 : 파일 서버 에러
 * 3000 ~ 3999 : 데이터베이스 에러
 * 9999 : 서버 에러
 */
'use strict';

const errorCode = {
  ko: {
    '0000': '성공',

    '0001': '인증에 실패하였습니다.',
    '0002': '세션값이 null 입니다.',
    '0003': '세션이 만료되었습니다.',
    '0004': 'Redis 세션 데이터 조회에 실패하였습니다.',
    '0005': '세션 복호화에 실패하였습니다.',

    '0500': '파라미터를 확인해주세요.',
    '0505': '조회에 실패하였습니다.',
    '0510': '수집에 실패하였습니다.',
    '0520': '복호화에 실패하였습니다.',
    '0530': 'API 오류입니다.',

    '0700': 'API KEY 저장에 실패했습니다.',
    '0705': 'API KEY 조회에 실패했습니다.',

    '0800': 'PIN 번호 조회에 실패했습니다.',

    1011: '회원 가입에 실패하였습니다.',
    1012: '회원 정보 갱신에 실패하였습니다.',
    1013: '회원 정보 조회에 실패하였습니다.',
    1014: '이미 가입된 회원입니다.',

    1020: 'OTP 번호를 확인해주세요.',
    1030: '초대 코드가 유효하지 않습니다.',
    1031: '가입 후 24시간이 지났거나, 만 19세 미만입니다.',
    1032: '리워드 수신주소 등록 실패',

    9999: 'API 서버 에러',
  },
  en: {
    '0000': 'Success',
    '0001': 'Authentication failed.',
    '0002': 'Session value is null.',
    '0003': 'Session has expired.',
    '0004': 'Failed to retrieve Redis session data.',
    '0005': 'Failed to decrypt session.',
    '0500': 'Please check the parameters.',
    '0505': 'Failed to retrieve data.',
    '0510': 'Failed to collect data.',
    '0520': 'Failed to decrypt data.',
    '0530': 'API error.',
    '0700': 'Failed to save API KEY.',
    '0705': 'Failed to retrieve API KEY.',
    '0800': 'Failed to retrieve PIN number.',
    1011: 'Failed to sign up.',
    1012: 'Failed to update member information.',
    1013: 'Failed to retrieve member information.',
    1014: 'Member already exists.',
    1020: 'Please verify your OTP number.',
    1030: 'Invalid invitation code.',
    1031: 'Either more than 24 hours have passed since registration or you are under 19 years old.',
    1032: 'Failed to register reward receiving address.',
    9999: 'API server error.',
  },
  ja: {
    '0000': '成功',
    '0001': '認証に失敗しました。',
    '0002': 'セッション値はnullです。',
    '0003': 'セッションが期限切れです。',
    '0004': 'Redisセッションデータの取得に失敗しました。',
    '0005': 'セッションの復号に失敗しました。',
    '0500': 'パラメータを確認してください。',
    '0505': 'データの取得に失敗しました。',
    '0510': 'データの収集に失敗しました。',
    '0520': 'データの復号に失敗しました。',
    '0530': 'APIエラーです。',
    '0700': 'APIキーの保存に失敗しました。',
    '0705': 'APIキーの取得に失敗しました。',
    '0800': 'PIN番号の取得に失敗しました。',
    1011: '会員登録に失敗しました。',
    1012: '会員情報の更新に失敗しました。',
    1013: '会員情報の取得に失敗しました。',
    1014: '既に会員です。',
    1020: 'OTP番号を確認してください。',
    1030: '無効な招待コードです。',
    1031: '登録後24時間が経過したか、19歳未満です。',
    1032: 'リワード受け取りアドレスの登録に失敗しました。',
    9999: 'APIサーバーエラー',
  },
};

export { errorCode };
