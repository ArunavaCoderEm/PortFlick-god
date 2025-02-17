import { describe, expect, it, beforeAll } from "vitest";
import axios from "axios";
import { UserProps } from "@/types/types";
import { userSchema } from "@/helper/user-valid-zod";

const mockUser: UserProps = {
  email: "test@example.com",
  username: "Test User",
  phone: "2000020063",
  avatar: "https://example.com/avatar.jpg",
  clerkid: "mock_clerk_id",
};

const BackendUrl: string = import.meta.env.VITE_BACKEND_URL || " ";

describe("user signup", () => {
  beforeAll(() => {
    const validationResult = userSchema.safeParse(mockUser);

    if (!validationResult.success) {
      console.error("Validation failed:", validationResult.error.format());
      throw new Error("Validation failed, stopping tests!");
    }
  });

  it("double signup doesn't work", async () => {
    const response = await axios.post(`${BackendUrl}/users/signup`, mockUser);

    expect(response.status).toBe(200);
    expect(response.data.id).not.toBeNull();

    await expect(
      axios.post(`${BackendUrl}/users/signup`, mockUser)
    ).rejects.toThrow();
  });
});
