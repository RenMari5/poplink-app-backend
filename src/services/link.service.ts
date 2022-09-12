import { linkModel } from "../models/link.model";
import { Link } from "../types/link.types";

async function getLinks() {
  const links = await linkModel.find().lean();
}

// Should also sort by createAt desc

async function getUserLinks(userId: string) {
  const links = await linkModel
    .find({ userId })
    .sort({ createdAt: "desc" })
    .lean();
  return links;
}

async function getProfileLinks(profileId: string) {
  const links = await linkModel
    .find({ profileId })
    .sort({ createdAt: "desc" })
    .lean();
  return links;
}

async function getLinksByUsername(profileUsername: string) {
  const links = await linkModel
    .find({ profileUsername })
    .sort({ createdAt: "desc" })
    .lean();
  return links;
}

async function getLink(id: string) {
  const link = await linkModel.findById(id).lean();
  return link;
}

async function addLink(data: Partial<Link>) {
  const newLink = await linkModel.create(data);
  return newLink;
}

async function updateLink(id: string, data: Partial<Link>) {
  const updatedLink = await linkModel
    .findByIdAndUpdate(id, data, {
      new: true,
    })
    .lean();
  return updatedLink;
}

async function deleteLink(id: string) {
  return await linkModel.findByIdAndDelete(id);
}

export const linkService = {
  getLinks,
  getUserLinks,
  getProfileLinks,
  getLinksByUsername,
  getLink,
  addLink,
  updateLink,
  deleteLink,
};
