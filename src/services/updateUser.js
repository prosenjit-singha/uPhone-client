import { toast } from "react-hot-toast";
import client from "../api";

export async function updateUser(admin, user, payload) {
  const toastId = toast.loading("Updating");
  try {
    const res = await client.patch(
      `/users/${user.uid}?uid=${admin.uid}`,
      payload
    );
    toast.success("User is verified", { id: toastId });
  } catch (err) {
    toast.error("Error while updating", { id: toastId });
  } finally {
    // toast.dismiss(toastId);
  }
}
