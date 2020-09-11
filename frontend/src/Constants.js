const prod_config = {
  mailchimp_subscribe_url:
    "https://techrich-backend-289205.wl.r.appspot.com/subscribe",
};

const dev_config = {
  mailchimp_subscribe_url: "http://localhost:5000/subscribe",
};

export const config =
  process.env.NODE_ENV === "development" ? dev_config : prod_config;
