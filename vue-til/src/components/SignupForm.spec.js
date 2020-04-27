// 테스트 유틸 라이브러리 로딩
import { shallowMount } from '@vue/test-utils';
// 컴포넌트 로딩
import SignupForm from '@/components/SignupForm.vue';

// describe('컴포넌트 이름', () => {
//   test('테스트 할 동작이나 기능', () => {
//     // 내용 정의
//   });
// });

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이 아니면 경고 메세지가 출력된다', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'a',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID, PW, Nickname이 입력되지 않으면 회원 가입 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: '',
          password: '',
          nickname: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});
