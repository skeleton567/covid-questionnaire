import { defineRule } from "vee-validate";

defineRule("required", (value) => {
  if (!value || !value.length) {
    return "ეს ველი სავალდებულოა";
  }
  return true;
});

defineRule("min_length", (value, [limit]) => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length < limit) {
    return `ეს ელი უნდა შედგებოდეს მინიმუმ ${limit} სიმბოლოსაგან`;
  }

  return true;
});

defineRule("email", (value) => {
  const emailRegex = /.@redberry.ge$/;
  if (emailRegex.test(value)) {
    return true;
  } else {
    return "მეილი უნდა იყოს რედბერის ფორმატში";
  }
});

defineRule("date", (value) => {
  if (!value || !value.length) {
    return true;
  }

  const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;
  if (dateRegex.test(value)) {
    return true;
  }
  return "რიცხი უნდა ჩაიწეროს დღე/თვე/წელი ფორმატით";
});
