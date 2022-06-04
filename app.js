const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
  });
  const data = await res.json();
  document.getElementById(
    "adviceNumber"
  ).innerHTML = `ADVICE # ${data.slip.id}`;
  document.getElementById("advice").innerHTML = `"${String(data.slip.advice)}"`;
};

fetchAdvice();
