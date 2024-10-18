import { loadYaks } from "../utils/loadYaks.js";

// GET /yak-shop/stock/:T - Returns the stock of milk and skins after T days
export const yakStockHandler = (req, res) => {
  let yaks = loadYaks();
  const T = parseInt(req.params.T, 10);
  let totalMilk = 0;
  let totalSkins = 0;

  // Calculate milk and skins after T days
  yaks.forEach((yak) => {
    if (yak.isAlive()) {
      totalMilk += yak.produceMilk() * T;
      if (yak.canBeShaved(T)) {
        totalSkins += 1;
        yak.shave();
      }
    }
  });

  res.json({
    milk: totalMilk.toFixed(2),
    skins: totalSkins,
  });
};

// GET /yak-shop/herd/:T - Returns the state of the herd after T days
export const yakHerdHandler = (req, res) => {
  let yaks = loadYaks();
  const T = parseInt(req.params.T, 10);

  // Update age of each yak
  yaks.forEach((yak) => yak.updateAge(T));

  const herdStatus = yaks
    .filter((yak) => yak.isAlive())
    .map((yak) => ({
      name: yak.name,
      age: (yak.age / 100).toFixed(2),
      "age-last-shaved": (yak.ageLastShaved / 100).toFixed(2),
    }));

  res.json({
    herd: herdStatus,
  });
};
