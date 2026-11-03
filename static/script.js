const taskData = {
  semantic: {
    readout: "nearest prompted color → class label",
    examples: [
      {
        title: "Semantic segmentation · Cityscapes",
        prompt: "Paint the requested Cityscapes classes with their assigned colors.",
        outputLabel: "Decoded semantic mask",
        input: "static/images/paper/city-input.webp",
        inputAlt: "Cityscapes street scene with parked cars",
        output: "static/images/paper/city-prediction.png",
        outputAlt: "Color-coded semantic mask of the street, buildings, cars, and sky"
      },
      {
        title: "Semantic segmentation · COCO-Object",
        prompt: "Paint the requested object classes with their assigned colors.",
        outputLabel: "Decoded semantic mask",
        input: "static/images/paper/coco-input.jpg",
        inputAlt: "A cat and a dog on a couch",
        output: "static/images/paper/coco-prediction.png",
        outputAlt: "Color-coded masks for the cat, dog, and couch"
      },
      {
        title: "Semantic segmentation · Cityscapes",
        prompt: "Paint the requested Cityscapes classes with their assigned colors.",
        outputLabel: "Decoded semantic mask",
        input: "static/images/paper/city-2-input.webp",
        inputAlt: "Another Cityscapes street scene",
        output: "static/images/paper/city-2-prediction.webp",
        outputAlt: "Color-coded semantic prediction for the second street scene"
      }
    ]
  },
  instance: {
    readout: "distinct color regions → instance masks",
    examples: [{
      title: "Instance segmentation · SA-Co/Gold",
      prompt: "Segment every dried apricot using a different listed color for each instance.",
      outputLabel: "Generated instance colors",
      input: "static/images/paper/instance-input.jpg",
      inputAlt: "Dried apricots on a wooden table",
      output: "static/images/paper/instance-prediction.png",
      outputAlt: "Individual dried apricots painted in distinct colors on black"
    }, {
      title: "Instance segmentation · SA-Co/Gold",
      prompt: "Segment each person with a different color; leave the background black.",
      outputLabel: "Generated instance colors",
      input: "static/images/paper/instance-person-input.webp",
      inputAlt: "People in an SA-Co/Gold example",
      output: "static/images/paper/instance-person-prediction.webp",
      outputAlt: "People segmented with separate colors on black"
    }, {
      title: "Instance segmentation · SA-Co/Gold",
      prompt: "Segment each football helmet with a different color; leave the background black.",
      outputLabel: "Generated instance colors",
      input: "static/images/paper/07_football_helmet.jpg",
      inputAlt: "Football players holding helmets in an SA-Co/Gold example",
      output: "static/images/paper/07_football_helmet.png",
      outputAlt: "Individual football helmets painted in separate colors on black"
    }]
  },
  referring: {
    readout: "prompted foreground color → binary mask",
    examples: [{
      title: "Referring segmentation · RefCOCOg",
      prompt: 'Segment “Woman in dark blue jacket with red and black scarf.”',
      outputLabel: "Generated referring mask",
      input: "static/images/paper/referring-input.webp",
      inputAlt: "Three people under a red canopy",
      output: "static/images/paper/referring-prediction.png",
      outputAlt: "The referred person painted in color on black"
    }, {
      title: "Referring segmentation · RefCOCOg",
      prompt: 'Segment “A boy in a blue shirt about to blow out his candles.”',
      outputLabel: "Generated referring mask",
      input: "static/images/paper/referring-boy-input.webp",
      inputAlt: "Boy at a birthday celebration",
      output: "static/images/paper/referring-boy-prediction.webp",
      outputAlt: "The boy in the blue shirt selected by the referring mask"
    }, {
      title: "Referring segmentation · RefCOCOg",
      prompt: 'Segment “A black ancient Greek vase with figures.”',
      outputLabel: "Generated referring mask",
      input: "static/images/paper/referring-vase-input.webp",
      inputAlt: "Black ancient Greek vase with figures",
      output: "static/images/paper/referring-vase-prediction.webp",
      outputAlt: "Predicted mask outlining the Greek vase"
    }]
  },
  reasoning: {
    readout: "prompted foreground color → binary mask",
    examples: [{
      title: "Reasoning segmentation · ReasonSeg",
      prompt: 'Segment “the place where piano players should sit.”',
      outputLabel: "Generated reasoning mask",
      input: "static/images/paper/reasoning-input.webp",
      inputAlt: "Grand piano and piano bench in a room",
      output: "static/images/paper/reasoning-prediction.png",
      outputAlt: "Piano bench painted in color on black"
    }, {
      title: "Reasoning segmentation · ReasonSeg",
      prompt: 'Segment “After cooking, consuming food, and preparing for food, where can we throw away the rest of the food and scraps?”',
      outputLabel: "Generated reasoning mask",
      input: "static/images/paper/reasoning-bin-input.webp",
      inputAlt: "Indoor scene with a place for food scraps",
      output: "static/images/paper/reasoning-bin-prediction.webp",
      outputAlt: "Predicted region for disposing of food scraps"
    }, {
      title: "Reasoning segmentation · ReasonSeg",
      prompt: 'Segment “If you want to play table tennis indoors, what furniture in the picture should be used as the playing surface?”',
      outputLabel: "Generated reasoning mask",
      input: "static/images/paper/reasoning-table-input.webp",
      inputAlt: "Indoor scene with a table for table tennis",
      output: "static/images/paper/reasoning-table-prediction.webp",
      outputAlt: "Predicted table surface for the reasoning query"
    }]
  },
  depth: {
    readout: "grayscale → relative depth; align for evaluation",
    examples: [
      ["NYUv2", "depth_nyu_01", "a kitchen sink and cabinets"],
      ["NYUv2", "depth_nyu_02", "a kitchen with a refrigerator and ovens"],
      ["DIODE", "depth_diode_06", "a brick building entrance"]
    ].map(([dataset, file, scene]) => ({
      title: `Relative depth · ${dataset}`,
      prompt: "Generate relative inverse depth: near points bright, far points dark, matching input pixels.",
      outputLabel: "Colorized depth prediction",
      input: `static/images/paper/geometry/depth/input/${file}.png`,
      inputAlt: `${dataset} scene showing ${scene}`,
      output: `static/images/paper/geometry/depth/ovb_klein_9b/${file}.png`,
      outputAlt: `Colorized relative-depth prediction for ${scene}`
    }))
  },
  normals: {
    readout: "RGB channels → camera-space normal vectors",
    examples: [
      ["iBims-1", "normals_ibims1_00", "a green-walled room with a table"],
      ["NYUv2", "normals_nyu_01", "a bathroom sink"],
      ["ScanNet", "normals_scannet_05", "upholstered furniture"]
    ].map(([dataset, file, scene]) => ({
      title: `Surface normals · ${dataset}`,
      prompt: "Encode camera-space surface normals in the RGB channels.",
      outputLabel: "Generated normal map",
      input: `static/images/paper/geometry/surface_normals/input/${file}.png`,
      inputAlt: `${dataset} scene showing ${scene}`,
      output: `static/images/paper/geometry/surface_normals/ovb_klein_9b/${file}.png`,
      outputAlt: `Surface-normal prediction for ${scene}`
    }))
  },
  editing: {
    readout: null,
    examples: [{
      title: "Image editing · ImgEdit-Bench",
      prompt: "Remove the green armchair.",
      outputLabel: "OVB image edit",
      input: "static/images/paper/editing-input.webp",
      inputAlt: "Room with a green armchair",
      output: "static/images/paper/editing-output.webp",
      outputAlt: "Same room after the green armchair is removed"
    }, {
      title: "Image editing · ImgEdit-Bench",
      prompt: "Add a group of deer grazing in the middle-right of the snow-covered field.",
      outputLabel: "OVB image edit",
      input: "static/images/paper/editing-deer-input.webp",
      inputAlt: "Snow-covered field before deer are added",
      output: "static/images/paper/editing-deer-output.webp",
      outputAlt: "Snow-covered field with deer added"
    }, {
      title: "Image editing · ImgEdit-Bench",
      prompt: "Replace the brown suitcase with a large potted plant.",
      outputLabel: "OVB image edit",
      input: "static/images/paper/editing-plant-input.webp",
      inputAlt: "Scene with a brown suitcase",
      output: "static/images/paper/editing-plant-output.webp",
      outputAlt: "Same scene with a potted plant in place of the suitcase"
    }]
  }
};

const demo = document.querySelector("[data-task-demo]");
if (demo) {
  const tabs = [...demo.querySelectorAll("[data-task]")];
  const panel = demo.querySelector("[role=tabpanel]");
  const prompt = demo.querySelector("[data-prompt]");
  const inputImage = demo.querySelector("[data-input-image]");
  const comparison = demo.querySelector("[data-prediction-comparison]");
  const comparisonImage = demo.querySelector("[data-comparison-image]");
  const outputImage = demo.querySelector("[data-output-image]");
  const outputLabel = demo.querySelector("[data-output-label]");
  const readout = demo.querySelector(".decode-step");
  const decoder = demo.querySelector("[data-decoder]");
  const title = demo.querySelector("[data-example-title]");
  const controls = demo.querySelector("[data-example-nav]");
  const count = demo.querySelector("[data-example-count]");
  let currentTask = "semantic";
  let currentExample = 0;

  const renderExample = () => {
    const task = taskData[currentTask];
    const example = task.examples[currentExample];
    inputImage.src = example.input;
    inputImage.alt = example.inputAlt;
    comparisonImage.src = example.input;
    outputImage.src = example.output;
    outputImage.alt = example.outputAlt;
    prompt.textContent = example.prompt;
    outputLabel.textContent = example.outputLabel;
    decoder.textContent = task.readout ?? "";
    readout.hidden = task.readout === null;
    title.textContent = example.title;
    controls.hidden = task.examples.length < 2;
    count.textContent = `Example ${currentExample + 1} of ${task.examples.length}`;
  };

  const selectTask = (tab, focus = false) => {
    currentTask = tab.dataset.task;
    demo.dataset.activeTask = currentTask;
    currentExample = 0;
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", tab.id);
    renderExample();
    if (focus) tab.focus();
  };

  let taskCycle = setInterval(() => {
    const index = tabs.findIndex((tab) => tab.dataset.task === currentTask);
    selectTask(tabs[(index + 1) % tabs.length]);
  }, 3000);

  const stopTaskCycle = () => {
    if (taskCycle !== null) {
      clearInterval(taskCycle);
      taskCycle = null;
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      stopTaskCycle();
      selectTask(tab);
    });
    tab.addEventListener("keydown", (event) => {
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault();
      stopTaskCycle();
      selectTask(tabs[next], true);
    });
  });

  const changeExample = (step) => {
    stopTaskCycle();
    const total = taskData[currentTask].examples.length;
    currentExample = (currentExample + step + total) % total;
    renderExample();
  };
  demo.querySelector("[data-previous-example]").addEventListener("click", () => changeExample(-1));
  demo.querySelector("[data-next-example]").addEventListener("click", () => changeExample(1));

  const updateReveal = (event) => {
    if (event.pointerType === "touch") return;
    const bounds = comparison.getBoundingClientRect();
    comparison.style.setProperty("--reveal-x", `${event.clientX - bounds.left}px`);
    comparison.style.setProperty("--reveal-y", `${event.clientY - bounds.top}px`);
    comparison.classList.add("is-revealing");
  };
  comparison.addEventListener("pointerenter", updateReveal);
  comparison.addEventListener("pointermove", updateReveal);
  comparison.addEventListener("pointerleave", () => comparison.classList.remove("is-revealing"));
}

const mascot = document.querySelector("[data-mascot]");
if (mascot) {
  let mascotClicks = 0;
  let clickReset;

  const launchBananas = () => {
    const bounds = mascot.getBoundingClientRect();
    const originX = bounds.left + bounds.width * 0.55;
    const originY = bounds.top + bounds.height * 0.48;
    const amount = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 8 : 30;

    mascot.classList.remove("is-celebrating");
    void mascot.offsetWidth;
    mascot.classList.add("is-celebrating");

    for (let index = 0; index < amount; index += 1) {
      const banana = document.createElement("span");
      const angle = (Math.PI * 2 * index) / amount + (Math.random() - 0.5) * 0.45;
      const distance = 130 + Math.random() * 330;
      banana.className = "banana-confetti";
      banana.textContent = "🍌";
      banana.setAttribute("aria-hidden", "true");
      banana.style.setProperty("--left", `${originX}px`);
      banana.style.setProperty("--top", `${originY}px`);
      banana.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      banana.style.setProperty("--y", `${Math.sin(angle) * distance + 80}px`);
      banana.style.setProperty("--rotation", `${Math.round((Math.random() - 0.5) * 900)}deg`);
      banana.style.setProperty("--duration", `${900 + Math.random() * 650}ms`);
      banana.style.setProperty("--delay", `${Math.random() * 100}ms`);
      document.body.appendChild(banana);
      banana.addEventListener("animationend", () => banana.remove());
    }
  };

  const registerMascotClick = () => {
    mascotClicks += 1;
    clearTimeout(clickReset);
    clickReset = setTimeout(() => { mascotClicks = 0; }, 1800);
    if (mascotClicks >= 3) {
      mascotClicks = 0;
      launchBananas();
    }
  };

  mascot.addEventListener("click", registerMascotClick);
  mascot.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      registerMascotClick();
    }
  });
}

const copyButton = document.querySelector("[data-copy-bib]");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const bibtex = document.getElementById("bibtex")?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(bibtex);
      copyButton.textContent = "Copied";
      setTimeout(() => { copyButton.textContent = "Copy"; }, 1600);
    } catch {
      copyButton.textContent = "Select text";
    }
  });
}
