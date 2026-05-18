const exercises = {
  "push-up": {
    id: "push-up",
    name: "Push-Up",
    focus: ["push", "upper-body", "full-body"],
    equipment: ["none", "dumbbells", "bands", "full"],
    prescription: "3 × 10-15 reps",
    tip: "Keep a straight line from head to heels and control each descent.",
  },
  dips: {
    id: "dips",
    name: "Dips",
    focus: ["push", "upper-body"],
    equipment: ["none", "dumbbells", "full"],
    prescription: "3 × 8-12 reps",
    tip: "Lower until elbows reach roughly 90° and drive back without locking shoulders.",
  },
  "pull-up": {
    id: "pull-up",
    name: "Pull-Up",
    focus: ["pull", "upper-body"],
    equipment: ["full"],
    prescription: "4 × 6-10 reps",
    tip: "Lead with the chest and squeeze shoulder blades together at the top.",
  },
  "inverted-row": {
    id: "inverted-row",
    name: "Inverted Row",
    focus: ["pull", "upper-body"],
    equipment: ["none", "bands", "full"],
    prescription: "3 × 10-12 reps",
    tip: "Keep body straight, pull chest to the bar, and squeeze shoulder blades together.",
  },
  superman: {
    id: "superman",
    name: "Superman Hold",
    focus: ["pull", "core"],
    equipment: ["none"],
    prescription: "3 × 30-45 seconds",
    tip: "Lift arms and legs simultaneously while keeping neck neutral and core engaged.",
  },
  squat: {
    id: "squat",
    name: "Squat",
    focus: ["legs", "full-body"],
    equipment: ["none", "dumbbells", "full"],
    prescription: "4 × 8-12 reps",
    tip: "Sit hips between the heels, keep chest lifted, and drive evenly through both feet.",
  },
  lunges: {
    id: "lunges",
    name: "Lunges",
    focus: ["legs", "mobility"],
    equipment: ["none", "dumbbells", "full"],
    prescription: "3 × 10 reps / leg",
    tip: "Stay tall through the torso and push off the front heel to return.",
  },
  deadlift: {
    id: "deadlift",
    name: "Deadlift",
    focus: ["pull", "legs"],
    equipment: ["dumbbells", "full"],
    prescription: "4 × 6-10 reps",
    tip: "Brace the core, keep the bar close, and hinge from the hips on every rep.",
  },
  "glute-bridge": {
    id: "glute-bridge",
    name: "Glute Bridge",
    focus: ["legs", "core"],
    equipment: ["none", "dumbbells", "bands", "full"],
    prescription: "3 × 12-15 reps",
    tip: "Drive through heels, squeeze glutes at the top, and keep core tight throughout.",
  },
  plank: {
    id: "plank",
    name: "Plank",
    focus: ["core", "full-body"],
    equipment: ["none"],
    prescription: "3 × 45-60 seconds",
    tip: "Press the floor away, squeeze glutes, and breathe steadily.",
  },
  "russian-twists": {
    id: "russian-twists",
    name: "Russian Twists",
    focus: ["core"],
    equipment: ["none", "dumbbells"],
    prescription: "3 × 20 total reps",
    tip: "Rotate from the rib cage while keeping the lower body steady.",
  },
  "mountain-climbers": {
    id: "mountain-climbers",
    name: "Mountain Climbers",
    focus: ["core", "conditioning", "mobility"],
    equipment: ["none"],
    prescription: "3 × 45 seconds",
    tip: "Drive knees toward the chest quickly while holding a strong plank.",
  },
  burpees: {
    id: "burpees",
    name: "Burpees",
    focus: ["conditioning", "full-body"],
    equipment: ["none"],
    prescription: "5 rounds × 12 reps",
    tip: "Move smoothly from squat to plank to jump, landing softly every time.",
  },
  "jumping-jacks": {
    id: "jumping-jacks",
    name: "Jumping Jacks",
    focus: ["conditioning", "mobility"],
    equipment: ["none"],
    prescription: "4 × 40 seconds",
    tip: "Stay light on the feet and fully extend arms overhead for each rep.",
  },
  "high-knees": {
    id: "high-knees",
    name: "High Knees",
    focus: ["conditioning", "mobility"],
    equipment: ["none"],
    prescription: "4 × 30 seconds",
    tip: "Drive knees toward hip height while pumping the arms to keep rhythm.",
  },
};

const exercisesByFocus = {
  push: [exercises["push-up"], exercises["dips"]],
  pull: [
    exercises["inverted-row"],
    exercises["superman"],
    exercises["pull-up"],
    exercises["deadlift"],
  ],
  legs: [exercises["squat"], exercises["lunges"], exercises["glute-bridge"]],
  core: [exercises["plank"], exercises["russian-twists"]],
  conditioning: [exercises["burpees"], exercises["high-knees"]],
  mobility: [exercises["mountain-climbers"], exercises["jumping-jacks"]],
  "full-body": [exercises["burpees"], exercises["mountain-climbers"]],
};

const planTemplates = {
  "three-day": {
    "upper-body": [
      { title: "Day 1 – Upper Push + Core", focus: ["push", "core"] },
      { title: "Day 2 – Upper Pull + Core", focus: ["pull", "core"] },
      { title: "Day 3 – Full Upper + Conditioning", focus: ["push", "pull"] },
    ],
    "lower-body": [
      { title: "Day 1 – Legs + Core", focus: ["legs", "core"] },
      { title: "Day 2 – Lower Power + Mobility", focus: ["legs", "mobility"] },
      { title: "Day 3 – Legs + Conditioning", focus: ["legs", "conditioning"] },
    ],
    core: [
      { title: "Day 1 – Core Strength", focus: ["core", "mobility"] },
      { title: "Day 2 – Core + Upper Body", focus: ["core", "push"] },
      { title: "Day 3 – Core + Lower Body", focus: ["core", "legs"] },
    ],
    cardio: [
      {
        title: "Day 1 – HIIT Conditioning",
        focus: ["conditioning", "full-body"],
      },
      { title: "Day 2 – Cardio + Core", focus: ["conditioning", "core"] },
      {
        title: "Day 3 – Endurance + Mobility",
        focus: ["conditioning", "mobility"],
      },
    ],
    "full-body": [
      { title: "Day 1 – Push + Core", focus: ["push", "core"] },
      { title: "Day 2 – Pull + Legs", focus: ["pull", "legs"] },
      {
        title: "Day 3 – Conditioning + Mobility",
        focus: ["conditioning", "mobility"],
      },
    ],
  },
  "five-day": {
    "upper-body": [
      { title: "Day 1 – Upper Push Focus", focus: ["push", "core"] },
      { title: "Day 2 – Upper Pull Focus", focus: ["pull", "mobility"] },
      {
        title: "Day 3 – Upper Push Variation",
        focus: ["push", "conditioning"],
      },
      { title: "Day 4 – Upper Pull Variation", focus: ["pull", "core"] },
      { title: "Day 5 – Full Upper + Conditioning", focus: ["push", "pull"] },
    ],
    "lower-body": [
      { title: "Day 1 – Lower Strength", focus: ["legs", "core"] },
      { title: "Day 2 – Lower Power", focus: ["legs", "conditioning"] },
      { title: "Day 3 – Lower Endurance", focus: ["legs", "mobility"] },
      { title: "Day 4 – Lower Strength II", focus: ["legs", "core"] },
      {
        title: "Day 5 – Lower + Conditioning",
        focus: ["legs", "conditioning"],
      },
    ],
    core: [
      { title: "Day 1 – Core Foundation", focus: ["core", "mobility"] },
      { title: "Day 2 – Core + Upper", focus: ["core", "push"] },
      { title: "Day 3 – Core + Lower", focus: ["core", "legs"] },
      { title: "Day 4 – Core Endurance", focus: ["core", "conditioning"] },
      { title: "Day 5 – Full Core Integration", focus: ["core", "full-body"] },
    ],
    cardio: [
      { title: "Day 1 – HIIT Training", focus: ["conditioning", "full-body"] },
      { title: "Day 2 – Cardio + Core", focus: ["conditioning", "core"] },
      { title: "Day 3 – Endurance Focus", focus: ["conditioning", "mobility"] },
      { title: "Day 4 – Power Conditioning", focus: ["conditioning", "legs"] },
      { title: "Day 5 – Mixed Cardio", focus: ["conditioning", "full-body"] },
    ],
    "full-body": [
      { title: "Day 1 – Upper Push", focus: ["push", "core"] },
      { title: "Day 2 – Upper Pull", focus: ["pull", "mobility"] },
      { title: "Day 3 – Lower Strength", focus: ["legs", "core"] },
      {
        title: "Day 4 – Athletic Conditioning",
        focus: ["conditioning", "full-body"],
      },
      { title: "Day 5 – Mobility & Core", focus: ["mobility", "core"] },
    ],
  },
};

const trainingTips = [
  "Begin each session with 5 minutes of dynamic prep and finish with easy breathing.",
  "Rest 60–90 seconds between strength sets and up to 2 minutes for heavy lifts.",
  "Log what you do each week so you can nudge volume, load, or tempo forward.",
];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("workoutForm");
  const resultCard = document.getElementById("workoutResult");
  const planOutput = document.getElementById("planOutput");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // 1. Get user inputs
    const level = document.getElementById("level").value;
    const duration = document.getElementById("duration").value;
    const focus = document.getElementById("focus").value;
    const equipment = document.getElementById("equipment").value;

    // 2. Get plan type from radio buttons
    let planType = "three-day";
    const radios = document.getElementsByName("planType");
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        planType = radios[i].value;
        break;
      }
    }

    // 3. Select appropriate template
    let templateGroup = planTemplates[planType] || planTemplates["three-day"];
    let days = templateGroup[focus] || templateGroup["full-body"];

    // 4. Generate daily workouts
    let generatedDays = [];
    for (let i = 0; i < days.length; i++) {
      const selectedExercises = gatherExercises(days[i].focus, equipment);
      generatedDays.push({
        title: days[i].title,
        exercises: selectedExercises,
      });
    }

    // 5. Check if any exercises were found (error handling)
    let hasExercises = false;
    for (let i = 0; i < generatedDays.length; i++) {
      if (generatedDays[i].exercises.length > 0) {
        hasExercises = true;
        break;
      }
    }

    if (!hasExercises) {
      planOutput.innerHTML =
        '<p class="plan-error">Sorry, we could not find exercises for this equipment setting.</p>';
      resultCard.style.display = "block";
      resultCard.hidden = false;
      return;
    }

    // 6. Display the plan
    showPlan(level, duration, focus, equipment, generatedDays);
  });
});

// Helper: Find exercises matching focus areas and equipment
function gatherExercises(focusList, equipment) {
  const seen = [];
  const allExercises = [];

  focusList.forEach((focus) => {
    const pool = exercisesByFocus[focus] || exercisesByFocus["full-body"] || [];
    const selections = [];

    for (const exercise of pool) {
      const exerciseId = exercise.id || exercise.name;

      // Check equipment compatibility and duplicates
      if (
        !matchesEquipment(exercise.equipment, equipment) ||
        seen.includes(exerciseId)
      ) {
        continue;
      }

      seen.push(exerciseId);
      selections.push(exercise);

      if (selections.length === 2) break; // Limit to 2 exercises per focus area
    }

    selections.forEach((item) => allExercises.push(item));
  });

  return allExercises;
}

// Helper: Check if exercise equipment matches user's equipment
function matchesEquipment(options, selected) {
  if (selected === "full-gym") return true;

  let userKey = selected;
  if (selected === "resistance-bands") userKey = "bands";

  return options.includes(userKey) || options.includes("none");
}

// Helper: Render the plan HTML
function showPlan(level, duration, focus, equipment, days) {
  const resultCard = document.getElementById("workoutResult");
  const planOutput = document.getElementById("planOutput");

  let html = `
    <section class="plan-summary">
      <div class="plan-summary-item"><span>Level:</span> ${level}</div>
      <div class="plan-summary-item"><span>Focus:</span> ${focus}</div>
      <div class="plan-summary-item"><span>Duration:</span> ${duration} min</div>
    </section>
    <section class="plan-days">
  `;

  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    html += `
      <article class="plan-day">
        <h3>${day.title}</h3>
    `;

    // Handle empty days if no exercises matched
    if (day.exercises.length === 0) {
      html += `<p style="color: #ffa115; font-style: italic;">No exercises available for this day with your selected equipment.</p>`;
    } else {
      day.exercises.forEach((ex) => {
        html += `
          <div class="plan-exercise">
            <strong>${ex.name}</strong>
            <span>${ex.prescription}</span>
            <p>${ex.tip}</p>
          </div>
        `;
      });
    }
    html += `</article>`;
  }

  html += `</section>`;

  html += `<section class="plan-tips"><h3>Quick Tips</h3>`;
  trainingTips.forEach((tip) => {
    html += `<p class="plan-tip">${tip}</p>`;
  });
  html += `</section>`;

  planOutput.innerHTML = html;
  resultCard.style.display = "block";
  resultCard.classList.add("show");
  resultCard.scrollIntoView({ behavior: "smooth" });
}
