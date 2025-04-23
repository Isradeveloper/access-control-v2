<template>
  <!-- Navigation -->
  <div class="flex-1 overflow-y-auto">
    <div class="px-4 py-2 text-sm text-gray-500 font-medium">MENÚ</div>

    <!-- Menu Items -->
    <nav class="space-y-1 px-2">
      <MenuItem label="Inicio" />

      <div class="px-2 py-2 text-sm text-gray-500 font-medium">APPS</div>

      <!-- Primer nivel de anidación: Procesos -->
      <details class="group">
        <summary
          class="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-purple-900 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          Procesos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <div class="pl-10 space-y-1 mt-1">
          <a
            href="#"
            class="block px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-purple-900 rounded-md"
          >
            Monitoreo
          </a>

          <!-- Segundo nivel de anidación: Gestión de Procesos -->
          <details class="group mt-1">
            <summary
              class="flex items-center px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-purple-900 rounded-md cursor-pointer"
            >
              Gestión de Procesos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 ml-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div class="pl-4 space-y-1 mt-1">
              <a
                href="#"
                class="block px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 hover:text-purple-900 rounded-md"
              >
                Crear Proceso
              </a>
              <a
                href="#"
                class="block px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 hover:text-purple-900 rounded-md"
              >
                Editar Proceso
              </a>

              <!-- Tercer nivel de anidación: Configuración Avanzada -->
              <details class="group mt-1">
                <summary
                  class="flex items-center px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 hover:text-purple-900 rounded-md cursor-pointer"
                >
                  Configuración Avanzada
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-2 w-2 ml-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div class="pl-3 space-y-1 mt-1">
                  <a
                    href="#"
                    class="block px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 hover:text-purple-900 rounded-md"
                  >
                    Parámetros
                  </a>
                  <a
                    href="#"
                    class="block px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 hover:text-purple-900 rounded-md"
                  >
                    Automatización
                  </a>
                  <a
                    href="#"
                    class="block px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 hover:text-purple-900 rounded-md"
                  >
                    Alertas
                  </a>
                </div>
              </details>
            </div>
          </details>

          <a
            href="#"
            class="block px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-purple-900 rounded-md"
          >
            Reportes
          </a>
        </div>
      </details>
    </nav>
  </div>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue';
</script>
