import Service from "../models/service.model.js";

//create service
export const createService = async (req, res) => {
  const { name, description, price } = req.body;

  if (
    name === "" ||
    description === "" ||
    price === "" ||
    typeof price !== "number"
  ) {
    return res.status(404).send({ message: "Invalid data" });
  }

  try {
    const newService = await Service.create({
      name,
      description,
      price,
    });

    if (newService) {
      await newService.save();
      res.status(201).send({ message: "New service created", newService });
    } else {
      res.status(400).send({ message: "Invalid service data" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error in creating service", error });
  }
};

//get a service by id
export const getService = async (req, res) => {
  const id = req.params.id;
  try {
    const service = await Service.findById(id);
    if (service) {
      res.status(200).send({ service });
    } else {
      res.status(404).send({ message: "Invalid user id" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error in fetching service", error });
  }
};

//get all services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    if (services) {
      res.status(200).send({ services });
    } else {
      res.status(404).send({ message: "No service available" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error fetching services", error });
  }
};
//update service
export const updateService = async (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;

  try {
    const data = { name, description, price };
    if (
      name === "" ||
      description === "" ||
      price === "" ||
      typeof price !== "number"
    ) {
      return res.status(404).send({ message: "Invalid data" });
    }

    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).send({ message: "Service not found!" });
    }

    const updatedService = await Service.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (updateService) {
      res.status(200).send({ message: "Service updated ", updatedService });
    } else {
      res.status(404).send({ message: "Invalid data" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error in updating record ", error });
  }
};
export const deleteService = async (req, res) => {
  const id = req.params.id;
  try {
    const service = await Service.findById(id);
    if (service) {
      await Service.findByIdAndDelete(id);
      res.status(200).send({ message: "Service deleted" });
    } else {
      res.status(404).send({ message: "Service not found!" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error in deleteing service", error });
  }
};
