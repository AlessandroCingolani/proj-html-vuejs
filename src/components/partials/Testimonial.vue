<script>
 export default {
  name:'Testimonial'
}
</script>

<template>
      <!-- slider da fare componente -->
      <section id="testimonials">
      <i>Testimonials</i>
      <h4>Why do people love me?</h4>
      <!-- slider -->
      <div class="row w-100 justify-content-center ">
        <div class="col-4">
          <div class="card">
            <h5>High level of eficiency and scientific teaching methods</h5>
            <p>I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.</p>
            <div class="profile d-flex">
              <div class="avatar">
                <img src="/public/images/artist-testimonial-avatar-04.jpg" alt="">
              </div>
              <div class="profile-data">
                <h6>Name</h6>
                <span>Role</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <h5>High level of eficiency and scientific teaching methods</h5>
            <p>I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.</p>
            <div class="profile d-flex">
              <div class="avatar">
                <img src="/public/images/artist-testimonial-avatar-04.jpg" alt="">
              </div>
              <div class="profile-data">
                <h6>Name</h6>
                <span>Role</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <h5>High level of eficiency and scientific teaching methods</h5>
            <p>I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.</p>
            <div class="profile d-flex">
              <div class="avatar">
                <img src="/public/images/artist-testimonial-avatar-04.jpg" alt="">
              </div>
              <div class="profile-data">
                <h6>Name</h6>
                <span>Role</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>


<style lang="scss" scoped>
  #testimonials {
    background-color: rgb(250, 248, 246);
      .card {
        padding: 30px;
        .profile {
          img {
            width: 50px;
            border-radius: 50%;
          }
        }
      }
    }
</style>