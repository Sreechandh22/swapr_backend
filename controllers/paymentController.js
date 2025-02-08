const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const User = require("../models/User");

exports.createSubscription = async (req, res) => {
  try {
    const { userId, paymentMethodId } = req.body;

    const customer = await stripe.customers.create({
      payment_method: paymentMethodId,
      email: req.user.email,
      invoice_settings: { default_payment_method: paymentMethodId },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: process.env.STRIPE_PRICE_ID }],
      expand: ["latest_invoice.payment_intent"],
    });

    await User.findByIdAndUpdate(userId, { isProUser: true });

    res.status(200).json({ subscriptionId: subscription.id });
  } catch (error) {
    res.status(500).json({ error: "Subscription creation failed" });
  }
};
