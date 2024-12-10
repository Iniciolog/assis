import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const run = await openai.beta.threads.runs.create(
    "thread_vrxymU3wHoA008uoyxGbZu0s",
    { assistant_id: "asst_7hAfN5rSogNINo1GwAU9vvXW" }
  );

  console.log(run);
}

main();
