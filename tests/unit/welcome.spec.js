import { mount } from "@vue/test-utils";
import WelcomePage from "@/views/WelcomePage";

describe("Welcome page", () => {
    let welcomePage = mount(WelcomePage);
    test("is view component", () => {
        expect(welcomePage.isVueInstance()).toBeTruthy();
    });
    test("renders correct text", () => {
        expect(welcomePage.html())
            .toContain('<p><i class="fas fa-info-circle"></i>Welcome to Portal LB!</p>');
    });
});