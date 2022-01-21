 const myData=fetch('./data.json')
  .then(response => response.json())
  .then(data => changeData(data))
  .catch(error => console.log(error));


function changeData(data){
    funDaily(data);
    funWeekly(data);
    funMonthly(data);
}

const work=document.getElementById("work")
const lsWork=document.getElementById("last-week-work")
const play=document.getElementById("play")
const lsPlay=document.getElementById("last-week-play")
const social=document.getElementById("social")
const lsSocial=document.getElementById("last-week-social")
const study=document.getElementById("study")
const lsStudy=document.getElementById("last-week-study")
const exercise=document.getElementById("exercise")
const lsExercise=document.getElementById("last-week-exercise")
const selfCare=document.getElementById("self-care")
const lsSelfCare=document.getElementById("last-week-sc")

function funDaily(data){
  const daily=document.getElementById("daily");
  daily.addEventListener('click',()=>
  {
  work.innerHTML=data[0].timeframes.daily.current+"Hrs";
  lsWork.innerHTML="Yesterday- "+data[0].timeframes.daily.previous+"Hrs";
  play.innerHTML=data[1].timeframes.daily.current+"Hrs";
  lsPlay.innerHTML="Yesterday- "+data[1].timeframes.daily.previous+"Hrs";
  study.innerHTML=data[2].timeframes.daily.current+"Hrs";
  lsStudy.innerHTML="Yesterday- "+data[2].timeframes.daily.previous+"Hrs";
  exercise.innerHTML=data[3].timeframes.daily.current+"Hrs";
  lsExercise.innerHTML="Yesterday- "+data[3].timeframes.daily.previous+"Hrs";
  social.innerHTML=data[4].timeframes.daily.current+"Hrs";
  lsSocial.innerHTML="Yesterday- "+data[4].timeframes.daily.previous+"Hrs";
  selfCare.innerHTML=data[5].timeframes.daily.current+"Hrs";
  lsSelfCare.innerHTML="Yesterday- "+data[5].timeframes.daily.previous+"Hrs";

  })
}
function funWeekly(data){
  const weekly=document.getElementById("weekly");
  weekly.addEventListener('click',()=>
  {
  work.innerHTML=data[0].timeframes.weekly.current+"Hrs";
  lsWork.innerHTML="Last Week- "+data[0].timeframes.weekly.previous+"Hrs";
  play.innerHTML=data[1].timeframes.weekly.current+"Hrs";
  lsPlay.innerHTML="Last Week- "+data[1].timeframes.weekly.previous+"Hrs";
  study.innerHTML=data[2].timeframes.weekly.current+"Hrs";
  lsStudy.innerHTML="Last Week- "+data[2].timeframes.weekly.previous+"Hrs";
  exercise.innerHTML=data[3].timeframes.weekly.current+"Hrs";
  lsExercise.innerHTML="Last Week- "+data[3].timeframes.weekly.previous+"Hrs";
  social.innerHTML=data[4].timeframes.weekly.current+"Hrs";
  lsSocial.innerHTML="Last Week- "+data[4].timeframes.weekly.previous+"Hrs";
  selfCare.innerHTML=data[5].timeframes.weekly.current+"Hrs";
  lsSelfCare.innerHTML="Last Week- "+data[5].timeframes.weekly.previous+"Hrs";

  })
}
function funMonthly(data){
  const monthly=document.getElementById("monthly");
  monthly.addEventListener('click',()=>
  {
  work.innerHTML=data[0].timeframes.monthly.current+"Hrs";
  lsWork.innerHTML="Last Month- "+data[0].timeframes.monthly.previous+"Hrs";
  play.innerHTML=data[1].timeframes.monthly.current+"Hrs";
  lsPlay.innerHTML="Last Month- "+data[1].timeframes.monthly.previous+"Hrs";
  study.innerHTML=data[2].timeframes.monthly.current+"Hrs";
  lsStudy.innerHTML="Last Month- "+data[2].timeframes.monthly.previous+"Hrs";
  exercise.innerHTML=data[3].timeframes.monthly.current+"Hrs";
  lsExercise.innerHTML="Last Month- "+data[3].timeframes.monthly.previous+"Hrs";
  social.innerHTML=data[4].timeframes.monthly.current+"Hrs";
  lsSocial.innerHTML="Last Month- "+data[4].timeframes.monthly.previous+"Hrs";
  selfCare.innerHTML=data[5].timeframes.monthly.current+"Hrs";
  lsSelfCare.innerHTML="Last Month- "+data[5].timeframes.monthly.previous+"Hrs";

  })
}
