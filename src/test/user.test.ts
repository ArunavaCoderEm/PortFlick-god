import { describe, expect, test } from "vitest";
import axios from "axios";
import { UserProps } from "@/types/types";

const mockUser: UserProps = {
  email: "test@example.com",
  username: "Test User",
  phone: "8695260699",
  avatar: "https://example.com/avatar.jpg",
  clerkid: "mock_clerk_id",
};

const BackendUrl: string = import.meta.env.VITE_BACKEND_URL || " ";

describe("user signup", () => {
  test("double signup doesn't work", async () => {
    const response = await axios.post(`${BackendUrl}/users/signup`, {
      ...mockUser,
    });

    expect(response.status).toBe(200);
    expect(response.data.id).not.toBeNull();
    expect(async () => {
      await axios.post(`${BackendUrl}/users/signup`, {
        ...mockUser,
      });
    }).toThrow("User Already Exists");
  });
});
