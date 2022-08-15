const daysHtml = document.getElementById("days");
const hoursHtml = document.getElementById("hours");
const minutesHtml = document.getElementById("minutes");
const secondsHtml = document.getElementById("seconds");

const countdown = () => {
  const countDownDate = new Date(`Oct 4, 2022 7:00:00`).getTime();

  const interval = setInterval(function () {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const secondsText = seconds.toString();

    if (!secondsText.includes("-")) {
      document.title = `Faltan: ${days}d ${hours}h ${minutes}m ${seconds}s`;

      daysHtml.innerText = days;
      hoursHtml.innerText = hours;
      minutesHtml.innerText = minutes;
      secondsHtml.innerText = seconds;
    }

    if (distance < 0) {
      clearInterval(interval);
      daysHtml.innerText = "0";
      hoursHtml.innerText = "0";
      minutesHtml.innerText = "0";
      secondsHtml.innerText = "0";

      document.title = `Vacaciones 🥳`;
    }
  }, 1000);
};

countdown();