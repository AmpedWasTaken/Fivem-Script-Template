local display = false

function UI(toggle)
    display = toggle
    SetNuiFocus(toggle, toggle)
    SendNUIMessage({
        type = "ui",
        enable = toggle
    })
end