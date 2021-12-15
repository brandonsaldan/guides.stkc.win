<template>
  <div class="py-16 bg-dark overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-48 animate__animated animate__fadeIn">
      <div class="text-base max-w-prose mx-auto lg:max-w-none">
        <h2 class="text-base text-blue-500 font-semibold tracking-wide uppercase">DelayOTA</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Installation Guide</p>
      </div>
      <div class="relative text-base mx-auto">
        <p class="text-lg text-gray-300">If you're unjailbroken, you'll need to wipe your device while supervising. It's a good idea to make a backup while unsupervised using either iCloud or iMazing/Apple Configurator. Do not backup if you're jailbroken. Your device has a chance to enter a recovery loop using this method, if this occurs, you'll have to update to a version thats currently signed/or use blobs.</p>
      </div>
      <div class="text-base max-w-prose mx-auto lg:max-w-none">
        <p class="mt-2 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl">For Jailbroken Devices</p>
      </div>
      <div class="lg:grid lg:grid-cols-1 lg:gap-8 lg:items-start">
        <div class="relative z-10">
          <div class="prose prose-indigo text-gray-300 mx-auto lg:max-w-none">
            <ul role="list">
              <li>1. Install <a class="text-white">Supervised Enabler</a> in your package manager by adding <a class="text-white" href="https://sharerepo.stkc.win/?repo=https://cydia.ichitaso.com/">this repo</a>.</li>
              <li>2. Install the profile for the corresponding iOS version you would like to update to through <a class="text-white" href="https://dhinakg.github.io/delayed-otas.html">this link</a>.</li>
              <li>3. In Settings, search for the newly downloaded profile by navigating to General -> Profiles & Device Management.</li>
              <li>4. Install the profile.</li>
              <li>5. Before upgrading, restore RootFS. Your personal files will <a class="text-white">not</a> be deleted by doing this.</li>
              <li>6. Navigate to Settings -> General -> Software Update and check for your selected version there.</li>
              <li>7. Select <a class="text-white">Download and Install</a>.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-base max-w-prose mx-auto lg:max-w-none">
        <p class="mt-2 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl">For Non-Jailbroken Devices</p>
      </div>
        <div class="relative z-10">
          <div class="prose prose-indigo text-gray-300 mx-auto lg:max-w-none">
            <p class="text-xl leading-8 font-semibold tracking-light mb-2">Windows: Using iMazing (Paid)</p>
            <ul role="list">
              <li>1. Download and install <a class="text-white">iMazing</a> from <a class="text-white" href="https://imazing.com/download/windows">this link</a>.</li>
              <li>2. Finish the setup process, then, press the <a class="text-white">Supervision</a> button on the right.</li>
              <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src="../assets/img/windows/supervise_device_1.png" alt="Workcation" class="h-auto" />
                </div>
              </blockquote>
              <li>3. Select <a class="text-white">Next</a>.</li>
              <li>4. Select <a class="text-white">Choose</a>.</li>
              <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src="../assets/img/windows/supervise_device_2.png" alt="Workcation" class="h-auto" />
                </div>
              </blockquote>
              <li>5. A new window displaying your organizations will open. Select the <a class="text-white">+</a> button in the bottom left.</li>
              <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src="../assets/img/windows/supervise_device_3.png" alt="Workcation" class="h-auto" />
                </div>
              </blockquote>
              <li>6. Add a name. (It can be whatever you want). Select <a class="text-white">Save</a>, then <a class="text-white">Choose</a>.</li>
              <li>7. Select <a class="text-white">Next</a>. Type the number shown to confirm, then select <a class="text-white">Next</a>.</li>
              <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src="../assets/img/windows/supervise_device_4.png" alt="Workcation" class="h-auto" />
                </div>
              </blockquote>
              <li>8. Once finished, your phone will probably display a setup screen. Complete the prompts on your iPhone.</li>
              <li>9. Install the profile for the corresponding iOS version you would like to update to through <a class="text-white" href="https://dhinakg.github.io/delayed-otas.html">this link</a>.</li>
              <li>10. In Settings, search for the newly downloaded profile by navigating to General -> Profiles & Device Management.</li>
              <li>11. Reboot your iPhone. Navigate to Settings -> General -> Software Update and check for your selected version there.</li>
              <li>12. Select <a class="text-white">Download and Install</a>.</li>
            </ul>
            <p class="text-xl leading-8 font-semibold tracking-light mt-3 mb-2">macOS: Using Apple Configurator 2</p>
            <ul role="list">
              <li>1. Install <a class="text-white">Apple Configutator 2</a> from the App Store.</li>
              <li>2. Finish the setup process, then select <a class="text-white">Get Started</a>.</li>
              <li>3. On your device, select <a class="text-white">Prepare</a>. Then, select <a class="text-white">Manual Supervision</a>. Select <a class="text-white">Next</a>.</li>
              <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src="../assets/img/macos/supervise_device_1.png" alt="Workcation" class="h-auto" />
                </div>
              </blockquote>
              <li>4. Select <a class="text-white">Do not enroll in MDM</a>. Select <a class="text-white">Next</a>.</li>
              <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src="../assets/img/macos/supervise_device_2.png" alt="Workcation" class="h-auto" />
                </div>
              </blockquote>
              <li>5. Under <a class="text-white">Organization</a>, select <a class="text-white">New Organization</a>. Either sign in with your Apple ID, or select <a class="text-white">skip</a>.</li>
              <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src="../assets/img/macos/supervise_device_3.png" alt="Workcation" class="h-auto" />
                </div>
              </blockquote>
              <li>6. Select <a class="text-white">Generate a supervision identity</a>.</li>
              <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src="../assets/img/macos/supervise_device_4.png" alt="Workcation" class="h-auto" />
                </div>
              </blockquote>
              <li>7. Configure <a class="text-white">iOS Setup Assistant</a>. It doesn't really matter what you select.</li>
              <li>8. Select <a class="text-white">Prepare</a>.</li>
              <li>9. Once finished, your phone will probably display a setup screen. Complete the prompts on your iPhone.</li>
              <li>10. Install the profile for the corresponding iOS version you would like to update to through <a class="text-white" href="https://dhinakg.github.io/delayed-otas.html">this link</a>.</li>
              <li>11. In Settings, search for the newly downloaded profile by navigating to General -> Profiles & Device Management.</li>
              <li>12. Reboot your iPhone. Navigate to Settings -> General -> Software Update and check for your selected version there.</li>
              <li>13. Select <a class="text-white">Download and Install</a>.</li>
            </ul>
          </div>
        </div>
        <div class="text-base max-w-prose mx-auto lg:max-w-none">
            <p class="mt-2 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl">Closing Notes</p>
        </div>
        <div class="relative text-base mx-auto">
            <p class="text-lg text-gray-300">If you wish to restore from a backup from iMazing/Apple Configurator 2 after updating, use DelayOTA. (Note that restoring from a backup will remove your supervision).</p>
        </div>
        <div class="relative z-10">
          <div class="prose prose-indigo text-gray-300 mx-auto lg:max-w-none">
            <p class="text-xl leading-8 font-semibold tracking-light mb-2">Windows: Using iMazing (Paid)</p>
            <ul role="list">
                <li>1. In iMazing, select <a class="text-white">Restore a Backup</a>.</li>
                <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                    <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                        <img src="../assets/img/windows/restore_from_backup_1.png" alt="Workcation" class="h-auto" />
                    </div>
                </blockquote>
                <li>2. iMazing will probably automatically select your backup, select <a class="text-white">Choose</a>.</li>
                <li>3. In the <a class="text-white">Restore Options</a> page, select what you want to restore from and press <a class="text-white">Next</a>.</li>
                <li>4. Disable Find My iPhone by navigating to Settings -> Apple ID -> your device -> Find My.</li>
                <li>5. Once done, you'll get a <a class="text-white">Confirm Restore</a> screen, select <a class="text-white">Restore</a>.</li>
            </ul>
          </div>
        </div>
        <div class="relative z-10">
          <div class="prose prose-indigo text-gray-300 mx-auto lg:max-w-none">
            <p class="text-xl leading-8 font-semibold tracking-light mb-2">macOS: Using Apple Configurator 2</p>
            <ul role="list">
                <li>1. In Apple Conifgurator 2, select the device you want to erase.</li>
                <li>2. Do one of the following:</li>
                <div class="mt-3">
                    <ul role="list">
                        <li>• Choose <a class="text-white">Actions -> Restore from Backup</a>.</li>
                        <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                        <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                            <img src="../assets/img/macos/restore_from_backup_1.png" alt="Workcation" class="h-auto" />
                        </div>
                        </blockquote>
                        <li>• Control + Left Click (or Right Click) your selected device and choose <a class="text-white">Restore from Backup</a>.</li>
                        <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                        <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                            <img src="../assets/img/macos/restore_from_backup_2.png" alt="Workcation" class="h-auto" />
                        </div>
                        </blockquote>
                    </ul>
                </div>
                <li>3. Choose your backup and press <a class="text-white">Restore</a>.</li>
            </ul>
          </div>
        </div>
        <div class="relative text-base mx-auto">
            <p class="text-lg text-gray-300">If you wish to Erase and Un-Supervise after updating your device, follow the steps below. (Doing this will Un-Supervise the device and erase it).</p>
        </div>
        <div class="relative z-10">
          <div class="prose prose-indigo text-gray-300 mx-auto lg:max-w-none">
            <p class="text-xl leading-8 font-semibold tracking-light mb-2">Windows: Using iMazing (Paid)</p>
            <ul role="list">
                <li>1. On the right, scroll all the way down and select <a class="text-white">Erase All Content</a>.</li>
                <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                    <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                        <img src="../assets/img/windows/erase_device_1.png" alt="Workcation" class="h-auto" />
                    </div>
                </blockquote>
                <li>2. Once booted, go through the normal setup and your phone should be unsupervised.</li>
            </ul>
          </div>
        </div>
        <div class="relative z-10">
          <div class="prose prose-indigo text-gray-300 mx-auto lg:max-w-none">
            <p class="text-xl leading-8 font-semibold tracking-light mb-2">macOS: Using Apple Configurator 2</p>
            <ul role="list">
                <li>1. Select the device you want to erase.</li>
                <li>2. Do one of the following:</li>
                <div class="mt-3">
                    <ul role="list">
                        <li>• Choose <a class="text-white">Actions -> Advanced -> Erase All Content and Settings</a>.</li>
                        <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                        <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                            <img src="../assets/img/macos/erase_device_1.png" alt="Workcation" class="h-auto" />
                        </div>
                        </blockquote>
                        <li>• Control + Left Click (or Right Click) your selected device and choose <a class="text-white">Advanced -> Erase All Content and Settings</a>.</li>
                        <blockquote class="relative bg-white rounded-lg shadow-lg mt-3 mb-3">
                        <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                            <img src="../assets/img/macos/erase_device_2.png" alt="Workcation" class="h-auto" />
                        </div>
                        </blockquote>
                    </ul>
                </div>
                <li>3. Once booted, go through the normal setup and your phone should be unsupervised.</li>
            </ul>
          </div>
        </div>
        <help-footer></help-footer>
    </div>
  </div>
</template>

<script>
import HelpFooter from "../components/HelpFooter.vue"

export default {
  name: 'DelayOTA',
  components: {
      HelpFooter,
  }
}
</script>
