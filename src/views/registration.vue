<template>
  <div class="registration-container1">
    <app-navigation />
    <form
      data-form-id="8c18e7a7-970c-4aea-a177-d5489ff33330"
      class="registration-form"
    >
      <input
        type="text"
        id="thq_iban_c7Vh"
        name="iban"
        tabindex="-1"
        spellcheck="false"
        autocorrect="off"
        placeholder="iban"
        autocomplete="new-password"
        autocapitalize="off"
        data-form-field-id="thq_iban_c7Vh"
        class="registration-textinput1 input"
      />
      <div class="registration-container2">
        <label>Imię i Nazwisko</label>
        <input
          type="text"
          id="thq_name_x3ZW"
          name="name"
          placeholder="Name"
          data-form-field-id="thq_name_x3ZW"
          class="registration-textinput2 input"
        />
      </div>
      <div class="registration-container3">
        <label>Email</label>
        <input
          type="email"
          id="thq_email_UHsL"
          name="email"
          placeholder="Email"
          data-form-field-id="thq_email_UHsL"
          class="registration-textinput3 input"
        />
      </div>
      <button
        id="thq_button_7jAH"
        name="button"
        type="submit"
        data-form-field-id="thq_button_7jAH"
        class="registration-button button"
      >
        Submit
      </button>
    </form>
    <a href="https://play.teleporthq.io/signup" class="registration-link">
      <div aria-label="Sign up to TeleportHQ" class="registration-container4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="registration-icon1"
        >
          <path
            d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
            fill="#B23ADE"
          ></path>
          <path
            d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
            fill="#FF5C5C"
          ></path>
          <path
            d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
            fill="#2874DE"
          ></path>
        </svg>
      </div>
    </a>
    <app-footer />
  </div>
</template>

<script>
import AppNavigation from '../components/navigation'
import AppFooter from '../components/footer'

export default {
  name: 'Registration',
  props: {},
  components: {
    AppNavigation,
    AppFooter,
  },
  metaInfo: {
    title: 'registration',
    meta: [
      {
        property: 'og:title',
        content: 'registration',
      },
    ],
  },
}
</script>

<style scoped>
.registration-container1 {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
 
.registration-form {
  gap: 8px;
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
}
 
.registration-textinput1 {
  top: auto;
  left: -10000px;
  width: 1px;
  height: 1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  visibility: hidden;
  pointer-events: none;
}
 
.registration-container2 {
  width: 100%;
  display: flex;
  flex-direction: column;
}
 
.registration-textinput2 {
  width: 100%;
}
 
.registration-container3 {
  width: 100%;
  display: flex;
  flex-direction: column;
}
 
.registration-textinput3 {
  width: 100%;
}
 
.registration-button {
  width: 100%;
}
 
.registration-link {
  display: contents;
}
 
.registration-container4 {
  right: 50px;
  border: 1px solid #ffffff5c;
  bottom: 30px;
  display: flex;
  z-index: 22;
  position: fixed;
  box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
  min-height: auto;
  align-items: center;
  padding-top: 8px;
  padding-left: 12px;
  border-radius: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  backdrop-filter: blur(6px);
  background-color: rgba(41, 41, 41, 0.41);
}
 
.registration-icon1 {
  width: 24px;
  margin-right: 4px;
}
 
.registration-text3 {
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
</style>
